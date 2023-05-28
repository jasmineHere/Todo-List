import { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState(''); //declare a state variable for tasks
  const [taskList, setTaskList] = useState([]); // declare a state variable for lists
  
  const handleClick = () => {

    setTaskList((prev) => setTaskList([...prev,task]))
  }; 

  return (
    <div className="App">
        <h1>
          My T0-DO-LIST
        </h1>
        <div className='container'>
          <p> This is to-do-list</p>
          <label>
            Enter your task here: 
            < input value={task} 
              name="myInput" 
              defaultValue="Example Task"
              onChange={e => setTask(e.target.value)}/>
          </label>
          <button onClick={() => handleClick()}>Add</button>
        {taskList&& taskList.map((task) => <p>{task}</p>)}
        </div>
    </div>
  );
}

export default App;
