import React, { useEffect, useState } from 'react';
import './TodoApiIntegration.css';

const TodoApiIntegration = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingValue, setEditingValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=6");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log("Error in fetching data");
      }
    };
    fetchTaskList();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("error in deleting the task");
    }
  };

  const handleAddTask = async () => {
    try {
      if(inputValue.trim() === '') return; // prevent empty add
      const newTask = {
        title: inputValue,
        completed: false
      };

      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();
      setTasks(prevTasks => [...prevTasks, data]);
      setInputValue(""); // Clear input after adding
    } catch (error) {
      console.log("Error while adding task to Todo list");
    }
  };

  const handleSaveTask = async (task) => {
    try {
      if (editingValue.trim() === '') {
        return;
      }
      const updatedTask = {
        title: editingValue,
        id: task.id,
        completed: task.completed
      };

      await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
      });

      // Update the task in local state
      setTasks(prevTasks =>
        prevTasks.map(t =>
          t.id === task.id ? { ...t, title: editingValue } : t
        )
      );

      setEditingIndex(null);
      setEditingValue('');
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingIndex(task.id);
    setEditingValue(task.title); 
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditingValue('');
  };

  return (
    <div className="todo-api-container">
      <div className="flex justify-between gap-4" style={{ width: '100%' }}>
        <input
          className="todo-api-input"
          placeholder="Add task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask} className="todo-api-button">Add</button>
      </div>
      {tasks.map((task) => (
        <div className="todo-api-task" key={task.id}>
          {editingIndex === task.id ? (
            <>
              <input
                className="todo-api-input"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button className='text-sm edit-button' onClick={handleCancel}>
                Cancel
              </button>
              <button className='text-sm edit-button' onClick={() => handleSaveTask(task)}>
                Save
              </button>
            </>
          ) : (
            <>
              <div className="todo-api-task-item">{task.title}</div>
              <button onClick={() => handleEditTask(task)}>
                <i className="bi bi-pen"></i>
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>
                <i className="bi bi-trash"></i>
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoApiIntegration;