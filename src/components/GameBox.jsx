import { useState } from 'react';
import SingleBox from './SingleBox';

export default function GameBox() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isPlayerX, setIsPlayerX] = useState(true);

    const handleClick = (index) => {
        if (board[index] === '') {
            setBoard(board.map((mark, i) => 
                i === index ? (isPlayerX ? 'X' : 'O') : mark
            ));
            setIsPlayerX(!isPlayerX);
        }
    };

    return (
        <main className='grid grid-cols-3 gap-3'>
            {board.map((mark, index) => (
                <SingleBox
                    key={index}
                    mark={mark}
                    onClick={() => handleClick(index)}
                />
            ))}
        </main>
    );
}
