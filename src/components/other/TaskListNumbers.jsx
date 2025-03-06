import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-3 w-screen'>
        <div className='rounded-2xl w[45%] p-10 bg-red-400!'>
            <h2 className='text-3xl font-semibold bg-red-400!'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium bg-red-400!'>New Task</h3>
        </div>
        <div className='rounded-2xl w[45%] p-10 bg-blue-400!'>
            <h2 className='text-3xl font-semibold bg-blue-400!'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium bg-blue-400!'>Accepted Task</h3>
        </div>
        <div className='rounded-2xl w[45%] p-10 bg-green-400!'>
            <h2 className='text-3xl font-semibold bg-green-400!'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium bg-green-400!'>Completed Task</h3>
        </div>
        <div className='rounded-2xl w[45%] p-10 bg-yellow-400!'>
            <h2 className='text-3xl font-semibold bg-yellow-400!'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium bg-yellow-400!'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers