import React from 'react';
import classes from './Board.module.scss';

const Square = (props) => {
    let markClass = "";
    const {children} = props;
    if (children === "X") {
        markClass = classes.Blue
    } 
    if (children === "Y") {
        markClass = classes.Red
    }
    return(
        <div className={classes.Square}><span className={markClass}>{children}</span></div>
    );
}

export default Square;