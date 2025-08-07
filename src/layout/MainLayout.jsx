import React from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  // bg-[#0f172a]
  return (
    <div className="relative w-full ">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout