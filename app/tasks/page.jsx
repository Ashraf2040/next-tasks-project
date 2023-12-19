import React from 'react'
import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

export const dynamic = "force-dynamic"
const TaskPage = () => {
  return (
    <div className='max-w-lg'>
    
    <TaskForm />
    <TaskList/>
      
    </div>
  )
}

export default TaskPage
