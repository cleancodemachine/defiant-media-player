import React, { useState } from 'react';

function Podcast(props) {
    //const position = props.key;
    const name = typeof(props.episodeTitle) === 'string' ? props.episodeTitle : null;
    const episode = typeof(props.episode) === 'number' ? props.episode : null;
    const season = typeof(props.season) === 'number' ? props.season : null;
    const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
    }

    
  if(season == null && episode == null){
            return (
                <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}} >
                    <div className="card" id="container" style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                        <div className="top">
                        <h2 className="name" aria-label="title"> {name}</h2>
                        <img className="square-img" src="data:image/jpeg;base64,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" alt="podcast-avatar" />
                        </div>
                        <div className="bottom-left">
                        </div>
                        <div className="bottom-right">
                            <p className="info" role="document" aria-label="season"></p>
                            <p className="info" role="document" aria-label="episode"></p>
                        </div>
                    </div>
                </div>
                ) ;
             }
            
  else if (season == null && episode != null){
      return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
            <div className="card" id="container" style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <div className="top">
                  <h2 className="name" aria-label="title"> {name}</h2>
                  <img className="square-img" src="data:image/jpeg;base64,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" alt="podcast-avatar" />
                </div>
                <div className="bottom-container">
                    <div className="bottom-left">
                    </div>
                    <div className="bottom-right">
                        <p className="info" role="document" aria-label="season"></p>
                        <p className="info" role="document" aria-label="episode">Episode {episode}</p>
                    </div>
                </div>
            </div>
        </div>
      );
  }
  
  else if(episode == null && season != null){
    return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
            <button className="card" id="container" style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                <div className="top">
                <h2 className="name" aria-label="title"> {name}</h2>
                <img className="square-img" src="data:image/jpeg;base64,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" alt="podcast-avatar" />
            </div>
            <div className="bottom-container">
            <div className="bottom-left">
            </div>
            <div className="bottom-right">
                <p className="info" role="document" aria-label="season">Season {season}</p>
                <p className="info" role="document" aria-label="episode"></p>
            </div>
        </div>

          </button>
        </div>
      );
  }
  
  else {
    return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
        <div className="card" id="container" style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className="top">
              <h2 className="name" aria-label="title"> {name}</h2>
              <img className="square-img" src="data:image/jpeg;base64,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" alt="podcast-avatar" />
            </div>
            <div className="bottom-container">
            <div className="bottom-left">
            </div>
            <div className="bottom-right">
                <p className="info" role="document" aria-label="season">Season {season}</p>
                <p className="info" role="document" aria-label="episode">Episode {episode}</p>
            </div>
        </div>

          </div>
        </div>
      );
  }
  
}

export default Podcast;

