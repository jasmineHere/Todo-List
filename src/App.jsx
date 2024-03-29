import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleClick = () => {
    if (task.trim() !== "") {
      setTaskList((prev) => [...prev, task]);
      setCompletedTasks((prev) => [...prev, false]);
      setTask("");
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleEditTask = (index) => {
    const updatedTask = prompt("Edit the task:", taskList[index]);
    if (updatedTask !== null) {
      setTaskList((prev) =>
        prev.map((task, i) => (i === index ? updatedTask : task))
      );
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList((prev) => prev.filter((_, i) => i !== index));
    setCompletedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAllTasks = () => {
    setTaskList([]);
    setCompletedTasks([]);
  };

  const handleTaskCompletion = (indexToComplete) => {
    setCompletedTasks((prev) =>
      prev.map((completed, index) => {
        if (index === indexToComplete) {
          return !completed;
        }
        return completed;
      })
    );
  };

  return (
    <div className="App">
      <h1>My T0-DO-LIST</h1>
      <div className="container">
        <label>
          <b>Enter your task here: </b>
          <input
            value={task}
            name="myInput"
            defaultValue="Example Task"
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
        </label>
        <button className="button1" onClick={() => handleClick()}>
          Add
        </button>
        <div className="tasksContainer">
          {taskList.map((task, index) => (
            <div className="TasksList" key={index}>
              <input
                type="checkbox"
                checked={completedTasks[index]}
                onChange={() => handleTaskCompletion(index)}
              />
              <span
                style={
                  completedTasks[index]
                    ? { textDecoration: "line-through" }
                    : {}
                }
              >
                {task}
              </span>
              <div className="icons">
                <i
                  className="far fa-edit"
                  onClick={() => handleEditTask(index)}
                ></i>
                <i
                  className="far fa-trash-alt"
                  onClick={() => handleDeleteTask(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="button2" onClick={() => clearAllTasks()}>
            Clear All Tasks
      </button>
    </div>
  );
}

export default App;

