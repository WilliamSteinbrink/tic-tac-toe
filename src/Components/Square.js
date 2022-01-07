import React from 'react';

const Square = ({ id, player }) => {
    const [color, setColor] = React.useState('green');
    const palet = ['red', 'blue', 'green'];
    const getRandomColor = () => palet[Math.floor(Math.random() * 3)]
    React.useEffect(() => {
        console.log(`Render ${id}`);
        return () => console.log(`Unmounting Square ${id}`)
    })

    return (
        <button onClick={(e) => {
            setColor(getRandomColor());
            e.target.style.background = color;
        }}>
            <h1>{id}</h1>
        </button>
    );
};

export default Square;