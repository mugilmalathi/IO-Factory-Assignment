import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default AllRoutes