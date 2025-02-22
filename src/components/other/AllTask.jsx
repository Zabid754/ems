import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-[#1c1c1c]! p-5 rounded mt-5 overflow-auto h-40'>
        <div className='bg-red-400! mb-2 py-2 px-4 justify-between flex rounded'>
            <h2 className='bg-red-400!'>Zabid</h2>
            <h3 className='bg-red-400!'>Make a UI design</h3>
            <h5 className='bg-red-400!'>Status</h5>
        </div>
        <div className='bg-blue-400! mb-2 py-2 px-4 justify-between flex rounded'>
            <h2 className='bg-blue-400!'>Zabid</h2>
            <h3 className='bg-blue-400!'>Make a UI design</h3>
            <h5 className='bg-blue-400!'>Status</h5>
        </div>
        <div className='bg-green-400! mb-2 py-2 px-4 justify-between flex rounded'>
            <h2 className='bg-green-400!'>Zabid</h2>
            <h3 className='bg-green-400!'>Make a UI design</h3>
            <h5 className='bg-green-400!'>Status</h5>
        </div>
    </div>
  ) 
}

export default AllTask