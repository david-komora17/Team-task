import React from 'react'

function Taskform() {
    const addTask = (newTask) => {
        const taskWithID = {...newTask, id: Date.now(), status: "pending"};
        setTasks([...tasks, taskWithID]);
    }

    const toggleStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
            ? {...task, status: tasks.status === 'pending' ? 'completed' : 'pending'}
            : task
        ))
    };
  return (
    <div>Taskform</div>
  )
}

export default Taskform