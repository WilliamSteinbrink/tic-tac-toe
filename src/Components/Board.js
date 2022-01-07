import React from "react";
import Square from './Square';

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [mounted, setMounted] = React.useState(true);
    const [random, setRandom] = React.useState(0);
    let [status, setStatus] = React.useState(`Player 1`);

    const toggle = () => setMounted(!mounted);

    const reRender = () => setRandom(Math.random());

    function renderSquare(i) {
        return <Square id={i} player={player}></Square>;
    }
    return (
        <div className="game-board"
            onClick={(e) => {
                (player === 1) ? setPlayer(2) : setPlayer(1);
                setStatus(`Player ${player}`);
            }}
        >
            <div className="grid-row">
                {mounted && renderSquare(0)}
                {mounted && renderSquare(1)}
                {mounted && renderSquare(2)}
            </div>
            <div id="info">
                <button onClick={toggle}>Show/Hide Row</button>
                <button onClick={reRender}>Re-render</button>
                <h1>{status}</h1>
            </div>
        </div>
    );
};

export default Board;