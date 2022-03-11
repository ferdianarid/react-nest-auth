import Heading from 'components/Heading'
import PageLayouts from 'layouts/PageLayouts'
import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const Homepage = () => {
   const navigate = useNavigate()

   const requestConfig = {
      headers: {
         Authorization: "Bearer " + localStorage.getItem("token")
      }
   }

   const token = localStorage.getItem("token")

   useEffect(() => {

   }, [])

   return (
      <React.Fragment>
         <PageLayouts>
            {
               token ? <Heading>Hello Users</Heading> : <Heading>You are not Logged In</Heading>
            }
         </PageLayouts>
      </React.Fragment>
   )
}

export default Homepage