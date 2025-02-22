import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[57%] overflow-x-auto flex items-center justify-start flex-nowrap py-5 px-3 rounded gap-5 w-full mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-600! p-5 rounded-2xl'>
            <div className='flex bg-red-600! justify-between items-center'>
                <h3 className='bg-red-600! text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='bg-red-600!'>20 Feb 2025</h4> 
            </div>
            <h2 className='mt-5 bg-red-600! font-bold text-xl'>Make your HW</h2>
            <p className='bg-red-600! text-sm mt-1.5'>You should do it on your own</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-600! p-5 rounded-2xl'>
            <div className='flex bg-red-600! justify-between items-center'>
                <h3 className='bg-red-600! text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='bg-red-600!'>20 Feb 2025</h4> 
            </div>
            <h2 className='mt-5 bg-red-600! font-bold text-xl'>Make your HW</h2>
            <p className='bg-red-600! text-sm mt-1.5'>You should do it on your own</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-600! p-5 rounded-2xl'>
            <div className='flex bg-red-600! justify-between items-center'>
                <h3 className='bg-red-600! text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='bg-red-600!'>20 Feb 2025</h4> 
            </div>
            <h2 className='mt-5 bg-red-600! font-bold text-xl'>Make your HW</h2>
            <p className='bg-red-600! text-sm mt-1.5'>You should do it on your own</p>
        </div>
        
    </div>
  )
}

export default TaskList