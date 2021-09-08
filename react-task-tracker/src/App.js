import Header from './components/Header'
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
import { useState,useEffect } from 'react';
function App() {
  const [tasks, setTasks] = useState([ ])
  const [totalTime,setTotalTime]=useState(0)

 //Adding
 const addTask=(task)=>
 {  const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, ...task }
  setTasks([...tasks, newTask])
 }

 
  useEffect(()=>{
  let temp=0;
  for (let i = 0; i < tasks.length; i++) {
    temp += parseInt(tasks[i].time); 
  }
   setTotalTime(temp);
 },[tasks])


  //Deleting 
  const deleteTask=(id)=>{

    setTasks(tasks.filter((task)=>task.id !== id))
  }

  return (
    
    <div className="containerr">
     <Header
          title="TASK TRACKER" totalTime={totalTime}/>
       <AddTask onAdd={addTask}/>
      <DisplayTask tasks={tasks} onDelete={deleteTask}/>
    </div>

    


  );
}
export default App;
