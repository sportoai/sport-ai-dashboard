import React from 'react'
import  { Routes ,  Route } from "react-router-dom"
import Dashboard from './Pages/Dashboard'
import Upload from './Pages/Upload'
import Analytics from './Pages/Analytics'
import Profile from './Pages/Profile'
import Highlights from './Pages/Highlights'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
