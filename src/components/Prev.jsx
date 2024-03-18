import React from 'react';

function Prev(props) {

    return (
        <div>
            <button className="button-playlist" onClick={ () => {props.onPrev()}}>Prev</button>
        </div>
    )
}

export default Prev;

/*
<button className="button-playlist">Prev</button>
*/