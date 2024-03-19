import React, { useState } from 'react';

function Song(props) {

    const name = props.title;
    const artist = typeof(props.artist) === 'string' ? props.artist : null;
    const year = typeof(props.year) === 'number' ? props.year : null;
    const [isMousedOver, setMouseOver] = useState(false);

  
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
    }
  if(artist === null && year === null){
      return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
           <div className="card"style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onDoubleClick= {() => {props.onAdd(name);}}>
                <div className="top">
                  <h2 className="name">{name}</h2>
                  <img className="circle-img" src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" alt="song-avatar" />
                </div>
                <div className="bottom-container">
                    <div className="bottom-left">
                    </div>
                    <div className="bottom-right">
                        <p className="info"></p>
                    </div>
                </div>

            </div>
        </div>
      );
  }
  else if(artist === null && year !== null){
      return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
           <div className="card"style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onDoubleClick= {() => {props.onAdd(name);}}>
                <div className="top">
                  <h2 className="name">{name}</h2>
                  <img className="circle-img" src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" alt="song-avatar" />
                </div>
                <div className="bottom-container">
                    <div className="bottom-left">
                    </div>
                    <div className="bottom-right">
                        <p className="info">{year}</p>
                    </div>
                </div>

            </div>
        </div>
      );
  }

  else if(artist !== null && year === null){
      return (
        <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
           <div className="card"style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onDoubleClick= {() => {props.onAdd(name);}}>
                <div className="top">
                  <h2 className="name">{name}</h2>
                  <img className="circle-img" src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" alt="song-avatar" />
                </div>
                <div className="bottom-container">
                    <div className="bottom-left">
                    </div>
                    <div className="bottom-right">
                        <p className="info">{artist}</p>
                    </div>
                </div>

            </div>
        </div>
      );
  }
  else {
      return(
          <div role="track-container" onDoubleClick= {() => {props.onAdd(name);}}>
              <div className="card"style={{ backgroundColor: isMousedOver ? "white" : "#A7D397" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onDoubleClick= {() => {props.onAdd(name);}}>
                  <div className="top">
                      <h2 className="name">{name}</h2>
                      <img className="circle-img" src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" alt="song-avatar" />
                  </div>
                  <div className="bottom-container">
                      <div className="bottom-left">
                      </div>
                      <div className="bottom-right">
                          <p className="info">{artist}</p>
                          <p className="info">{year}</p>
                      </div>
                  </div>

              </div>
          </div>
      );
  }
}

export default Song;


