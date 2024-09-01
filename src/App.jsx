import GameBox from './components/GameBox'

export default function App() {
  return (
    <main className='bg-gray-950 max-h-screen h-screen flex justify-center items-center'>
      <div className='text-white flex flex-col gap-5 justify-center items-center'>
        <h1 className='flex gap-3 text-4xl font-bold'>Tic Tac Toe</h1>
        <GameBox />
        <div className='bg-gray-900 justify-center items-center text-center flex rounded-lg py-2 w-full'>
          <h1 className='text-gray-400'>Winner</h1>
        </div>
        <button className='w-full justify-center items-center'>Play Again</button>
      </div>
    </main>
  )
}