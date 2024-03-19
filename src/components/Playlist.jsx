import React, { useState, useEffect } from 'react';
import Status from './Status.jsx';
import Next from './Next.jsx';
import Prev from './Prev.jsx';
import Shuffle from './Shuffle.jsx';
import Song from './Song.jsx';
import Podcast from './Podcast.jsx';
import Pause from './Pause.jsx';



function Playlist() {
    function transform(data) {
        return data.map(dataItem => {
            if (dataItem.hasOwnProperty('title')) {
                return { ...dataItem, name: dataItem.title, type: "song" };
            } else if (dataItem.hasOwnProperty('episodeTitle')) {
                return { ...dataItem, name: dataItem.episodeTitle, type: "podcast" };
            } else {
                return dataItem;
            }
        });
    }
    const url = 'http://localhost:3001/tracks';
    // Use useState to create a state variable to hold the tracks data
    const [tracks, setTracks] = useState([]);
    // Use useEffect to fetch the data when the component mounts
    useEffect(() => {
        fetch(url)
            .then((response) => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Parse the JSON in the response
                return response.json();
            })
            .then((data) => {

                // Update the state with the fetched data
                //console.log('Data:', data);
                setTracks(transform(data));
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error('Error fetching the data:', error);
            });
    }, []);


    const [nowPlayingIndex, setNowPlayingIndex] = useState(null);
    const [nowPlaying, setNowPlaying] = useState("");
    const [isPlaying, setPlaying] = useState(0);

    function setPlay(track) {
        setNowPlaying(track);
        setNowPlayingIndex(getIndex(track));
        setPlaying(1);
    }

   function getIndex(track) {
       return tracks.findIndex(t => t.title === track || t.episodeTitle === track);
   }



    function getTitle(int) {
        const track = tracks[int];
        return track.name;
    }

    function skipTrack() {
        let int = nowPlayingIndex;
        if (int === tracks.length - 1 || int === null) {
            int = 0;
            setNowPlayingIndex(int); 
        } else {
            int = int + 1;
            setNowPlayingIndex(int);
        }
        setNowPlaying(getTitle(int));
        setPlaying(1);
    }

    function backTrack() {  
        setPlaying(1);
        let int = nowPlayingIndex;
        if (int === 0 || int === null) {
            int = tracks.length - 1;
            setNowPlayingIndex(int);
        } else {
            int = int - 1;
            setNowPlayingIndex(int);
        }
        console.log('Index:', int);
        setNowPlaying(getTitle(int));
    }

    function togglePause() {
        if (isPlaying === 1) {
            setPlaying(2);
        } else if (isPlaying === 0) {
            setNowPlayingIndex(0);
            setNowPlaying(getTitle(0));
            setPlaying(1);
        } else {
            setPlaying(1);
        }
    }

    function fisherYatesShuffle(tracks) {
        for (let i = tracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
        }
        return tracks;
    }

    function shuffle() {
        // Make sure first track is not the same
        const firstTrack = tracks[0];
        let shuffledTracks = fisherYatesShuffle(tracks);
        while (shuffledTracks[0].name === firstTrack.name) {
            shuffledTracks = fisherYatesShuffle(tracks);
        }




          {shuffledTracks.map((track, index) => {
            if (track.type ==='song') {
                return <Song key={index} {...track} onAdd={setPlay}/>;
            } else if (track.type === 'podcast') {
                return <Podcast key={index} {...track}  onAdd={setPlay}/>;
            } else {
                return null;
            }
            })}
            setNowPlaying(getTitle(0));
            setNowPlayingIndex(0);
            setPlaying(1);
        }

    return (
        <div>
            <div className="card-heading">
                <div className="top">
                    <Status currentTrack={nowPlaying} isPaused={isPlaying}/>
                </div>
                <div className="button-container">
                    <Pause onPause={togglePause}/>
                    <Prev onPrev={backTrack}/>
                    <Next onSkip={skipTrack}/>
                    <Shuffle onShuffle={shuffle}/>  
                </div>
            </div>
            {tracks.map((track, index) => {
                if (track.type ==='song') {
                    return <Song key={index} {...track} onAdd={setPlay}/>;
                } else if (track.type ==='podcast') {
                    return <Podcast key={index} {...track} onAdd={setPlay}/>;
                } else {
                    return null;
                }
            })}                                 
        </div>
    )
}


export default Playlist;



