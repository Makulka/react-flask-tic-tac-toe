export const markPositionNotInRange = (state) => {
    return (state.currentMarkPosition < 0 || state.currentMarkPosition > 9);
}

export const markPositionTaken = (state) => {
    const position = state.currentMarkPosition;
    const positionInBoard = state.board[position];
    if (Number.isInteger(position)) {
        return position !== positionInBoard;
    } else {            
        return false;
    }
}

export const markIsValid = (state) => {
    return !markPositionNotInRange(state) && !markPositionTaken(state)
}

export const hasWon = (board) => {  
    return (
        (board[0] === board[1] && board[0] === board[2]) ||    
        (board[3] === board[4] && board[3] === board[5]) ||
        (board[6] === board[7] && board[6] === board[8]) ||
        (board[0] === board[3] && board[0] === board[6]) ||
        (board[1] === board[4] && board[1] === board[7]) ||
        (board[2] === board[5] && board[2] === board[8]) ||
        (board[0] === board[4] && board[0] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6])          
    );
}

export const boardIsFull = (board) => {
    return board.filter(position => Number.isInteger(position)).length === 0
}



