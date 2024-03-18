import React from 'react';  

function Shuffle(props) {
    return (
        <div>
            <button className="button-playlist" onClick={ () => {props.onShuffle()}}>Shuffle</button>
        </div>
    )
}

export default Shuffle;