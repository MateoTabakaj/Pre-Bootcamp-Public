import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTask() {
    if (inputValue !== '') {
      setTasks([...tasks, { id: tasks.length + 1, description: inputValue, completed: false }]);
      setInputValue('');
    }
  }

  function handleTaskCompletion(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  
  const onDelete=(event)=>{
    console.log(tasks)
    setTasks(tasks.filter((item, index)=>  item.id!==event))
  }
  // ketu do vendosim item.id sepse id-se i kemi dhene +1 e nuk korrespondon me indexin. Ne kete menyre kap item 1 me id 1


  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul style={{listStyle: 'none'}}>
        {tasks.map(task => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(task.id)}
              />
              <span className={task.completed ? 'completed' : ''} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.description}</span>
              <button onClick={()=>onDelete(task.id)}>Delete</button> 
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;