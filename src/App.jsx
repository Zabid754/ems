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
  // useEffect(() => {
  //   if(authdata){
  //     const loggedInUser= localStorage.getItem("loggedInUser")
  //     console.log(loggedInUser)
  //     if(loggedInUser){
  //       setuser(loggedInUser.role)
  //     }
  //   }
  
  // }, [authdata])

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
      setuser('admin')
      const admin= authdata.admin
      setloggedInUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
    }else if(authdata ){
      const employee= authdata.employees.find((e)=>email===e.email && e.password===password)
      if(employee){
        setuser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data: employee}))
      }
    }
    else{
      alert("Invalid credentials!")
    }
  }


  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ? <AdminDashboard data={loggedInUserData}/> : (user=='employee'?<EmployeeDashBoard data={loggedInUserData}/> : null) }
    
    </>
  )
}

export default App