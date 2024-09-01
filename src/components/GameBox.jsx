/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import SingleBox from './SingleBox';
import { WINNING_PATTERNS } from '../assets/data/WinningPattern';

export default function GameBox() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isPlayerX, setIsPlayerX] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = board.map((mark, i) =>
                i === index ? (isPlayerX ? 'X' : 'O') : mark
            );
            setBoard(newBoard);
            setIsPlayerX(!isPlayerX);
            const gameWinner = checkWinner(newBoard);
            if (gameWinner) {
                setWinner(gameWinner);
            }
        }
    };

    const checkWinner = (board) => {
        for (const pattern of WINNING_PATTERNS) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setIsPlayerX(true);
        setWinner(null);
    };

    return (
        <div className='text-white flex flex-col gap-5 justify-center items-center'>
            <main className='grid grid-cols-3 gap-3'>
                {board.map((mark, index) => (
                    <SingleBox
                        key={index}
                        mark={mark}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </main>
            {winner &&
                <div className='bg-white justify-center items-center text-center flex rounded-lg py-2 w-full font-bold'>
                    <h1 className='text-gray-900'>Winner: {winner}</h1>
                </div>
            }
            {!winner && board.every(mark => mark) &&
                <div className='bg-white justify-center items-center text-center flex rounded-lg py-2 w-full font-bold'>
                    <h1 className='text-gray-900'>It's a Draw</h1>
                </div>
            }
            <button className='w-full justify-center items-center bg-gray-900 text-center flex rounded-lg py-2' onClick={resetGame}>Play Again</button>
        </div>
    );
}
