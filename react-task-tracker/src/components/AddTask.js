import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')



  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd({ text, date, time })

    setText('')
    setDate('')
    setTime('')
  }

  return (
    <form className="addform" onSubmit={onSubmit}>
      <div className="formcontrol">
        <label>Task</label>
        <input className="field" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="formcontrol">
        <label>Date</label>
        <input className="field" type="date" placeholder="" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="formcontrol">
        <label>Time(in Minutes)</label>
        <input className="field" type="text" placeholder="" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <input type="submit" className="button button-block" value='Save Task' />
    </form>

  )
}

export default AddTask
