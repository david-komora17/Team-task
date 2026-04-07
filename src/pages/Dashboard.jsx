import React from 'react'

function Dashboard() {
    const [tasks, setTasks] = useState([{
        id : 1,
        title: "initial task",
        description: "first task",
        status: "pending"
    }]);
    return (
    <div>
        Dashboard
    </div>
  )
}
export default Dashboard
