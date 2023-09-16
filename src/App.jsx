import { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState(''); //declare a state variable for tasks
  const [taskList, setTaskList] = useState([]); // declare a state variable for lists
  
  const handleClick = () => {
    if(task.trim() !== '') { // make sure empty tasks are not added
      setTaskList(prev => [...prev, task]);
      setTask(''); // clear the task input
    }
  }; 

  const handleTaskCompletion = (indexToRemove) => {
    setTaskList(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
        <h1>
          My T0-DO-LIST
        </h1>
        <div className='container'>
          <label>
            <b>Enter your task here: </b> 
            < input value={task} 
              name="myInput" 
              defaultValue="Example Task"
              onChange={e => setTask(e.target.value)}/>
          </label>
          <button onClick={() => handleClick()}>Add</button>
        {/* {taskList&& taskList.map((task) => <p>{task}</p>)} */}
        {taskList.map((task, index) => (
          <div key={index}>
            <input 
              type="checkbox" 
              onChange={() => handleTaskCompletion(index)} 
            />
            {task}
          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
