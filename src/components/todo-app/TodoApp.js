import React, { useState } from 'react'
import "./Todo.css"

const TodoApp = () => {
  const [tasks, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('')

  // States for editing
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() === "") return; // avoid empty tasks
    setTask([...tasks, inputValue])
    setInputValue('');
  }

  // simpler:
  // const handleDelete = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTask(newTasks);
  // }

  //The .filter() method is a built-in JavaScript array function that creates a new array containing only the elements that pass a test you specify.
  const handleDelete = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  }

  const handleEdit = (index, task) => {
    setEditingIndex(index);
    setEditingValue(task);
  }

  const handleSave = () => {
    if (editingValue.trim() == "") return;

    const updatedTasks = [...tasks]
    updatedTasks[editingIndex] = editingValue;
    setTask(updatedTasks)
    setEditingIndex(null)
    setEditingValue('')
  }
  const handleCancel = () => {
    setEditingIndex(null);
    setEditingValue('');
  }

  return (
    <div className='todo'>
      <div className='flex justify-between gap-4' style={{ width: '100%' }}>
        <input
          className="border-2 border-slate-400 rounded-md"
          placeholder="Add task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
      </div>

      {tasks.map((task, index) => (
        <div className='task-list flex' key={index}>
          {editingIndex === index ? (
            <>
              <input
                className="border-2 border-slate-400 rounded-md"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className='text-sm' onClick={handleSave}>Save</button>
              <button className='text-xs' onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div className='items'>{task}</div>
              <button onClick={() => handleEdit(index, task)}>
                <i className="bi bi-pen"></i>
              </button>
              <button onClick={() => handleDelete(index)}>
                <i className="bi bi-trash"></i>
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoApp;