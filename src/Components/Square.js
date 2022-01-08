import React from 'react';

<<<<<<< HEAD
const Square = ({ id, newState }) => {
=======
const Square = ({ id, player, newState }) => {
>>>>>>> b4dd8bf7209fd1bbc62e3760f1187148ede5d059
    const [color, setColor] = React.useState('green');
    const [status, setStatus] = React.useState(null);
    const XorO = ["O", "X"];
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
<<<<<<< HEAD
            let nextPlayer = newState(id);
            setStatus(nextPlayer);
=======
            newState({id:id, color:color});
>>>>>>> b4dd8bf7209fd1bbc62e3760f1187148ede5d059
            e.target.style.background = col;
        }}>
            <h1>{XorO[status]}</h1>
        </button>
    );
};

export default Square;