import React, { SyntheticEvent, useState } from 'react'
import Heading from 'components/Heading'
import PageLayouts from 'layouts/PageLayouts'

const Register = () => {
   const [username, setUsername] = useState("")
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirm, setConfirmPassword] = useState("")

   const CreateUsers = (event: SyntheticEvent): any => {
      event.preventDefault()
      const data = { username, name, email, password, confirm }

      const requestOptions = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data)
      }

      const response = fetch('http://localhost:5000/api/register', requestOptions)
         .then(response => response.json())
         .then(data => console.log(data))

   }

   return (
      <PageLayouts>
         <Heading>Register Page</Heading>
         <form onSubmit={CreateUsers} className="max-w-sm mt-8 mb-8 rounded-lg border border-gray-300 py-8 px-10">
            {/* <!-- Field Username --> */}
            <div className="mb-4">
               <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2">Username <span className="text-red-600">*</span></label>
               <input type="text" required id="username" value={username} name="username" onChange={event => setUsername(event.target.value)} placeholder="Enter Username" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>

            {/* <!-- Field Name --> */}
            <div className="mb-4">
               <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2">Name <span className="text-red-600">*</span></label>
               <input type="text" required id="name" value={name} name="name" onChange={event => setName(event.target.value)} placeholder="Enter Name" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>

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

            {/* <!-- Field Confirm Password --> */}
            <div className="mb-4">
               <label htmlFor="confirmpassword" className="block text-gray-900 text-sm font-bold mb-2">Confirm Password <span className="text-red-600">*</span></label>
               <input type="text" required id="confirm" value={confirm} name="confirm" onChange={event => setConfirmPassword(event.target.value)} placeholder="Enter Confirm Password" className="appereance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>

            {/* <!-- Button Submit --> */}
            <button type="submit" className="mb-4 w-full text-center font-bold ml-0 no-underline inline-block px-3 py-[10px] leading-none bg-blue-700 border-blue-700 border rounded text-white hover:bg-blue-900 mt-4 sm:mt-0">
               <p className="text-sm font-bold">Create User Account</p>
            </button>
         </form>
      </PageLayouts>
   )
}

export default Register