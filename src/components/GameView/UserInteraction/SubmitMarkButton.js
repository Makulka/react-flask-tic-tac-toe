import React from 'react';

const SubmitMarkButton = (props) => {
    const {submitMarkPosition,       
        isGameOver        
    } = props;
    
    return(
        <div>
            <p>When ready, enter the position</p>
            <button
                onClick={submitMarkPosition}
                disabled={isGameOver}>Enter Position</button>
        </div>
    );
}

export default SubmitMarkButton;

//TODO - disable button when win or draw