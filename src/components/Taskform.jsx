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

    const deleteTask = (id) {
        setTasks(tasks.filter(task => task.id !== id))
    };
    return (
        <div className='task-item'>
            <h3>{class.title}</h3>
            <p>{task.description}</p>
            <p>Status:<strong>{task.status}</strong></p>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onToggle(task.id)}>
                Mark as: {task.status === 'Pending' ? 'Complete' : 'Pending'}
            </button>
        </div>
    )
}

export default Taskform