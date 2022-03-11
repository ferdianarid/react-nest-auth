import Heading from 'components/Heading'
import PageLayouts from 'layouts/PageLayouts'
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
   const navigate = useNavigate()

   useEffect(() => {
      if (!localStorage.getItem("token")) {
         navigate("/login")
      }
   }, [])

   return (
      <PageLayouts>
         <Heading>Dashboard Page</Heading>
         <h4 className="font-medium text-xl mt-3">Successfully Redirected to Dashboard Page</h4>
      </PageLayouts>
   )
}

export default Dashboard