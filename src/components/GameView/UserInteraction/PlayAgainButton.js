import React from 'react';

const PlayAgainButton = (props) => {
    return(
        <div>
            <button onClick={props.resetState}>Play Again</button>
        </div>
    ) 
}

export default PlayAgainButton;