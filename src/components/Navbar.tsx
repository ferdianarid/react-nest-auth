import React, { useEffect } from 'react'
import { BrowserRouter, Link, Routes, useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
   const token = localStorage.getItem("token")

   const GuestNavigation = () => {
      return (
         <React.Fragment>
            <div className='w-[15%] flex justify-between'>
               <Link to={'/login'} className="nav-link">
                  <a className="text-white text-sm">Login</a>
               </Link>
               <Link to={'/register'} className="nav-link">
                  <a className="text-white text-sm">Register</a>
               </Link>
            </div>
         </React.Fragment>
      )
   }

   useEffect(() => {
   }, [token])

   const LogoutAction = () => {
      localStorage.removeItem("token")
      setTimeout(() => {
         navigate("/login")
      }, 2000)
   }

   const AdminNavigation = () => {
      return (
         <React.Fragment>
            <div className='w-[15%] flex justify-between'>
               <Link to={'/dashboard'} className="nav-link">
                  <a className="text-white text-sm">Dashboard</a>
               </Link>
               <button onClick={LogoutAction} className="text-white text-sm font-bold bg-transparent border-none">Logout</button>
            </div>
         </React.Fragment >
      )
   }
   return (
      <React.Fragment>
         <div className="w-full bg-[#1c1033]">
            <div className="flex justify-between py-5 px-[100px] font-bold items-center">
               <div className='w-[85%]'>
                  <Link to={'/'} className="nav-link">
                     <a className="text-white text-xl">ReactNest</a>
                  </Link>
               </div>
               {token ? <AdminNavigation /> : <GuestNavigation />}
            </div>
         </div>
      </React.Fragment>
   )
}

export default Navbar