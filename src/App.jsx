import GameBox from './components/GameBox'

export default function App() {
  return (
    <main className='bg-gray-950 max-h-screen h-screen flex justify-center items-center'>
      <div className='text-white flex flex-col gap-5 justify-center items-center'>
        <h1 className='flex gap-3 text-4xl font-bold'>Tic Tac Toe</h1>
        <GameBox />
      </div>
    </main>
  )
}