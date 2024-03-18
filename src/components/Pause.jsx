import React from 'react';

function Pause(props) { 
    return (
        <div>
            <button className="button-playlist" onClick={ () => {props.onPause()}}>Pause/Play</button>
        </div>
    )
}

export default Pause;