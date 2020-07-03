import React from 'react';
import classes from './PositionInput.module.scss';

const PositionInput = (props) => {
    const {
        mark,
        value,
        getMarkPosition,
        currentMarkPosition,
        markPositionNotInRange,
        markPositionTaken,
        markIsValid,
    } = props;    
    
    return(
        <div>
            <label>Player {mark}, enter position for your mark: </label>
            <input 
                type="number"  
                min="0"
                max="8"   
                value={value}
                onChange={getMarkPosition} />
            {/* validation messages for position */}
            { 
                markPositionNotInRange() &&
                    <p className={classes.Error}>Please enter a number between 0 and 8</p>
            }
            {
                markPositionTaken() && !markPositionNotInRange() &&
                    <p className={classes.Error}>Please try again, position {currentMarkPosition} is taken</p>
            }            
            <p className={ markIsValid() ? classes.Invisible : classes.NotDisplayed }>Invisible</p>
        </div>
    );
}

export default PositionInput;