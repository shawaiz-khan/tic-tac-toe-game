/* eslint-disable react/prop-types */
export default function SingleBox({ mark, onClick }) {
    return (
        <button
            className='bg-white p-10 rounded-xl overflow-hidden max-w-10 max-h-10 justify-center items-center flex'
            onClick={onClick}
        >
            <h1 className='text-red-700 text-4xl font-bold'>{mark}</h1>
        </button>
    );
}