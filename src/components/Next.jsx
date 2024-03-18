import React from 'react';

function Next(props) {

    return (
        <div>
            <button className="button-playlist" onClick={ () => {props.onSkip()}}>Next</button>
        </div>
    )
}

export default Next;