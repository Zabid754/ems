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
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authdata=useContext(AuthContext)
  //console.log(authdata.employees)
  useEffect(() => {
    if(authdata){
      const loggedInUser= localStorage.getItem("loggedInUser")
      console.log(loggedInUser)
      if(loggedInUser){
        setuser(loggedInUser.role)
      }
    }
  
  }, [authdata])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setuser(userData.role)
      setloggedInUserData(userData.data)

    }
  
  }, [])
  
  

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      console.log('Admin')
      setuser('admin')
      const admin= authdata.admin
      setloggedInUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authdata ){
      const employee= authdata.employees.find((e)=>email===e.email && e.password===password)
      if(employee){
        console.log('User')
        setuser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      }
    }
    else{
      alert("Invalid credentials!")
    }
  }


  console.log(user)
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ? <AdminDashboard/> : (user=='employee'?<EmployeeDashBoard data={loggedInUserData}/> : null) }
    
    </>
  )
}

export default App