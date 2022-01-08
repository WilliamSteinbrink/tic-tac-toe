import React from "react";
import Square from './Square';
import checkWinner from "./Winner";

const Board = () => {
    const [player, setPlayer] = React.useState(1);
<<<<<<< HEAD
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
=======
    const [state, setState] = React.useState([]);

    let status = `Player ${player}`;

    const newState = (obj) => {
        setState([...state, obj]);
        console.log(`adding state ${JSON.stringify(state)}`);
>>>>>>> b4dd8bf7209fd1bbc62e3760f1187148ede5d059
    }

    function renderSquare(i) {
        return <Square id={i} player={player} newState={newState}></Square>;
    }
    return (
        <div className="game-board">
<<<<<<< HEAD
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
=======
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
>>>>>>> b4dd8bf7209fd1bbc62e3760f1187148ede5d059
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