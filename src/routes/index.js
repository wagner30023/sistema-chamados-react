
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Signin from '../pages/Signin'
import SigninUp from '../pages/SigninUp'

const RoutesApp = () => {
  return (
    <Routes>
        <Route path="/" element={ <Signin /> }/>
        <Route path="/register" element={ <SigninUp /> }/>
    </Routes>
  )
}

export default RoutesApp