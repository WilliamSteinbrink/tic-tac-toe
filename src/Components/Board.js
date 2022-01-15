import React from "react";
import Square from './Square';
import checkWinner from "./Winner";

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [state, setState] = React.useState(Array(9).fill(null));
    let status = `Player ${player}`;
    let winner = checkWinner(state);
    if(winner != null) status = `Player ${winner} wins!`

    const newState = idOfSquare => {
        let thePlayer = player;
        state[idOfSquare] = player;
        setState(state);
        let nextPlayer = (player + 1) % 2;
        setPlayer(nextPlayer);
        return thePlayer;
    }

    function renderSquare(i) {
        return <Square id={i} player={player} newState={newState}></Square>;
    }
    return (
        <div className="game-board">
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="grid-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="grid-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div id="info">
                <button>Show/Hide Row</button>
                <button>Re-render</button>
                <h1>{status}</h1>
            </div>
        </div>
    );
};

export default Board;