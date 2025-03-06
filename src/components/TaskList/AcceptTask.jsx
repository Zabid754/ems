import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-600! p-5 rounded-2xl'>
            <div className='flex bg-red-600! justify-between items-center'>
                <h3 className='bg-red-600! text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='bg-red-600!'>20 Feb 2025</h4> 
            </div>
            <h2 className='mt-5 bg-red-600! font-bold text-xl'>Make your HW</h2>
            <p className='bg-red-600! text-sm mt-1.5'>You should do it on your own</p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500! py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500! py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>

  )
}

export default AcceptTask