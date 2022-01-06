import React from 'react';

const Square = ({id}) => {
    const [color, setColor] = React.useState('green');
    const palet = ['red', 'blue', 'green'];
    const getRandomColor = () => palet[Math.floor(Math.random() * 3)]

    return (
        <button onClick={(e) => {
            setColor(getRandomColor());
            e.target.style.background = color;
        }}> <h1>{id}</h1> </button>
    );
};

export default Square;