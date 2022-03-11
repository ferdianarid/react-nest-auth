import React, { SyntheticEvent, useState } from 'react'
import Navbar from 'components/Navbar'
import PageLayouts from 'layouts/PageLayouts'
import Heading from 'components/Heading'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   const LoginUsers = (event: SyntheticEvent): any => {
      event.preventDefault()
      const data = { email, password }

      const requestOptions = {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      }

      const response = fetch('http://localhost:5000/api/login', requestOptions)
         .then(response => response.json())
         .then(data => localStorage.setItem("token", data.data.split(" ")[1]))

      setTimeout(() => {
         navigate("/")
      }, 2000)
   }

   return (
      <React.Fragment>
         <PageLayouts>
            <Heading>Login Page</Heading>
            <form onSubmit={LoginUsers} className="max-w-sm mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10">
               {/* <!-- Field Email --> */}
               <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2">Email Address <span className="text-red-600">*</span></label>
                  <input type="email" required id="email" value={email} name="email" onChange={event => setEmail(event.target.value)} placeholder="Enter Email Address" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
               </div>

               {/* <!-- Field Password --> */}
               <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-900 text-sm font-bold mb-2">Password <span className="text-red-600">*</span></label>
                  <input type="text" required id="password" value={password} name="password" onChange={event => setPassword(event.target.value)} placeholder="Enter Password" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
               </div>

               {/* <!-- Button Submit --> */}
               <button type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-3 py-[10px] leading-none bg-blue-700 border-blue-700 border rounded text-white hover:bg-blue-900 mt-4 sm:mt-0">
                  <p className="text-sm font-bold">Login</p>
               </button>
            </form>
         </PageLayouts>
      </React.Fragment>
   )
}

export default Login