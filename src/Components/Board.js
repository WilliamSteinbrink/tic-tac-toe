import React from "react";
import Square from './Square';

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    let [status, setStatus] = React.useState(`Player 1`);

    function renderSquare(i) {
        return <Square id={i}></Square>;
    }
    return (
        <div className="game-board"
            onClick={(e) => {
                (player === 1) ? setPlayer(2) : setPlayer(1);
                setStatus(`Player ${player}`);
            }}
        >
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div id="info">
                <h1>{status}</h1>
            </div>
        </div>
    );
};

export default Board;