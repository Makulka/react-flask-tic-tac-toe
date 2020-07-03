import React, {Component} from 'react';
import Board from '../../components/GameView/Board/Board';
import PositionInput from '../../components/GameView/UserInteraction/PositionInput';
import SubmitMarkButton from '../../components/GameView/UserInteraction/SubmitMarkButton';
import PlayAgainButton from '../../components/GameView/UserInteraction/PlayAgainButton';
import {markPositionNotInRange, 
    markPositionTaken,
    markIsValid,
    hasWon,
    boardIsFull
} from './../../utils/gameValidation';


class GameView extends Component {
    intialState = {
        board: [0,1,2,3,4,5,6,7,8],        
        marks: ["X", "Y"],
        currentMark: "X",
        currentMarkPosition: "",
        isWin: false,
        isGameOver: false,
        isDraw: false
    };  
    state = this.intialState;  
    getMarkPosition = (e) => {
        if (Number.isInteger(parseInt(e.target.value))) {  
            this.setState({            
                currentMarkPosition: parseInt(e.target.value)                
            });
        }        
    }   
    setMarkAndCheckGameProgress = () => {                
        if (markIsValid(this.state) && this.state.currentMarkPosition !== "") {
            const newBoard = [...this.state.board];
            newBoard[this.state.currentMarkPosition] = this.state.currentMark;
            const newCurrentMark = this.state.marks[1];
            const currentMark = this.state.currentMark; 
            this.setState({
                board: newBoard                
                },
                function() { 
                    if (hasWon(this.state.board)) {
                        this.setState({
                            isWin: true,
                            isGameOver: true
                        })                
                    } 
                    else if (boardIsFull(this.state.board) ) {
                        this.setState({                            
                            isGameOver: true,
                            isDraw: true
                        }) 
                    }
                    else {
                        this.setState({
                            marks: [newCurrentMark, currentMark],
                            currentMark: newCurrentMark,
                            currentMarkPosition: ""
                        })
                    }                     
                }
            )    
        }
    } 
    resetState = () => {
        this.setState(this.intialState)
    }
    render() {
        const {
            board,
            currentMarkPosition,
            currentMark,
            isWin,
            isGameOver,
            isDraw
        } = this.state;                 
        return(
            <div>
                <h2>Wellcome to Tick-Tac-Toe Game!</h2>                
                <Board                     
                    board={board} 
                />

                {!isGameOver &&                     
                    <div>
                        <PositionInput 
                        mark={currentMark}
                        value={currentMarkPosition}
                        getMarkPosition={this.getMarkPosition}
                        currentMarkPosition={currentMarkPosition}
                        markPositionNotInRange={() => markPositionNotInRange(this.state)}
                        markPositionTaken={() => markPositionTaken(this.state)}
                        markIsValid={() => markIsValid(this.state)}
                        />
                        <SubmitMarkButton 
                            submitMarkPosition={this.setMarkAndCheckGameProgress}
                            isGameOver={isGameOver}
                            board={board}
                        />
                    </div>
                }
                { isGameOver && isWin &&
                    <div>
                        <p>Congratulations Player {currentMark}, you have won!</p>
                        <PlayAgainButton 
                            resetState={this.resetState}
                        />
                    </div>
                    //TODO play again button -> click -> reset board, state to false
                }
                { isGameOver && isDraw &&
                    <div>
                        <p>It is a draw!</p>
                        <PlayAgainButton 
                            resetState={this.resetState}
                        />
                    </div>
                }
                
            </div>
        );
    };
}

export default GameView;