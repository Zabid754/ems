import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div id='tasklist' className='h-[57%] overflow-x-auto flex items-center justify-start flex-nowrap py-5 px-3 rounded gap-5 w-full mt-10'>
        {data.tasks.map((e, idx)=>{
            if(e.active){
                return <AcceptTask key={idx}/>
            }
            if(e.new_task){
                return <NewTask key={idx}/>
            }
            if(e.completed){
                return <CompleteTask key={idx}/>
            }
            if(e.failed){
                return <FailedTask key={idx}/>
            }
        })}
        
    </div>
  )
}

export default TaskList