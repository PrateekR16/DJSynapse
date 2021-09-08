import Button from './Button'
const Header = ({title, onAdd ,totalTime,showAdd}) => {

    return (
        <>
            <header className='head'>
                <h1 >
                    {title}
                </h1>
                <Button  text='Add Task' />
                <span className="time-display">Total Time : {totalTime} minutes</span>
            </header>
            <div>
                <p>Organize yourself</p>
                <p>Utilize your time efficiently</p>
                <p>Click 'Add' to enter a task</p>
            </div>

        </>

    )
}



export default Header
