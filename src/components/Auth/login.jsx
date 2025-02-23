import React, { useState } from 'react'

const login = ({handleLogin}) => {
    
    //console.log(handleLogin)



    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setemail('')
        setpassword('')
    }
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
               <input 
               value={email}
               onChange={(e)=>{
                //console.log(e.target.value)
                setemail(e.target.value)
               }}
               required className='mt-5 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your Email' /> 
               <input 
               value={password}
               onChange={(e)=>{
                setpassword(e.target.value)
               }}
               required className='mt-5 text-white outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter Password' />
               <button className='mt-5 text-white outline-none border-none bg-emerald-600! w-full text-xl py-3 px-5 rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default login