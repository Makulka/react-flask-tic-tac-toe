import React from 'react';
import Square from './BoardSquare';
import classes from './Board.module.scss';

const Board = props => {    
    const {board} = props;
    const drawnBoard = board.map((item, index) => <Square children={item} key={index}/>)
    
    return(
        <div className = {classes.Board}>{drawnBoard}</div>
    );
}

export default Board;