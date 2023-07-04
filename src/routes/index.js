
import React from 'react'
import { Routes, Route} from 'react-router-dom'

// Pages 
import Signin from '../pages/Signin'
import SigninUp from '../pages/SigninUp'
import Dashboard from '../pages/Dashboard'

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={ <Signin /> }/>
        <Route path="/register" element={ <SigninUp /> }/>
        <Route path="/dashboard" element={ <Dashboard /> }/>
    </Routes>
  )
}

export default RoutesApp