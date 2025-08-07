import React from 'react'
import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  // bg-[#0f172a]
  return (
    <div className="relative h-screen w-full bg-black text-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout