import SingleBox from './SingleBox'

export default function GameBox() {
    return (
        <main className='grid grid-rows-3 gap-3'>
            <div className='grid grid-cols-3 gap-3'>
                <SingleBox />
                <SingleBox />
                <SingleBox />
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <SingleBox />
                <SingleBox />
                <SingleBox />
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <SingleBox />
                <SingleBox />
                <SingleBox />
            </div>
        </main>
    )
}
