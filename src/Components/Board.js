import React from "react";
import Square from './Square';

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [state, setState] = React.useState([]);

    let status = `Player ${player}`;

    const newState = (obj) => {
        setState([...state, obj]);
        console.log(`adding state ${JSON.stringify(state)}`);
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
            <div id="info">
                <button>Show/Hide Row</button>
                <button>Re-render</button>
                <h1>{status}</h1>
            </div>
        </div>
    );
};

export default Board;