import { useState } from 'react';

export default function SingleBox() {
    const [board, setBoard] = useState({
        isPlayer: true,
        mark: '',
    });

    const handleClick = () => {
        if (board.mark === '' && board.isPlayer) {
            setBoard(prevBoard => {
                const newBoard = {
                    mark: prevBoard.isPlayer ? 'X' : 'O',
                    isPlayer: !prevBoard.isPlayer,
                };
                console.log('New Board:', newBoard);
                return newBoard;
            });
        } else if (board.mark === '' && !board.isPlayer) {
            setBoard(prevBoard => {
                const newBoard = {
                    mark: prevBoard.isPlayer ? 'X' : 'O',
                    isPlayer: !prevBoard.isPlayer,
                };
                console.log('New Board:', newBoard);
                return newBoard;
            });
        }
    };

    return (
        <button
            className='bg-white p-10 rounded-xl overflow-hidden max-w-10 max-h-10 justify-center items-center flex'
            onClick={handleClick}
        >
            <h1 className='text-red-700 text-4xl font-bold'>{board.mark}</h1>
        </button>
    );
}
