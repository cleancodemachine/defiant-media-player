import React from 'react';



function Status({currentTrack, isPaused}) {

    function getStatus() {
        if (isPaused === 0){
            return "Select a track to play";
        } else if (isPaused === 2) {
            return "Paused";
        }
        return "Playing " + currentTrack;
    }

    return (
        <div role="status">
            <h2 className='name-heading'>{getStatus()}</h2>
        </div>
    )

}

export default Status;