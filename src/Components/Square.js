import React from 'react';

const Square = ({ id, player, newState }) => {
    const [color, setColor] = React.useState('green');
    const palet = ['red', 'blue', 'green'];
    const getRandomColor = () => palet[Math.floor(Math.random() * 3)]
    React.useEffect(() => {
        console.log(`Render ${id}`);
        return () => console.log(`Unmounting Square ${id}`)
    })

    return (
        <button onClick={(e) => {
            let col = getRandomColor();
            setColor(col);
            newState({id:id, color:color});
            e.target.style.background = col;
        }}>
            <h1>{id}</h1>
        </button>
    );
};

export default Square;