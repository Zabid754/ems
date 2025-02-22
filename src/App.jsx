import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/Authprovider'



const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  
   
  // }, )

  const [user, setuser] = useState(null)
  const authdata=useContext(AuthContext)
  //console.log(authdata.employees)
  useEffect(() => {
    if(authdata){
      const loggedInUser= localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setuser(loggedInUser.role)
      }
    }
  
  }, [authdata])
  

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      console.log('Admin')
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authdata && authdata.employees.find((e)=>email==e.email && e.password==password)){
      console.log('User')
      setuser('user')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    else{
      alert("Invalid credentials!")
    }
  }



  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ? <AdminDashboard/> : <EmployeeDashBoard/> }
    
    </>
  )
}

export default App