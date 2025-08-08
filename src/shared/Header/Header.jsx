import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Github, Menu, Search, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Components', path: '/components' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className=" shadow">
      <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <NavLink className="text-3xl font-light " to="/">Xenon UI</NavLink>
          <p className=' lg:block hidden px-2 py-1 text-xs text-zinc-300 bg-zinc-800 rounded-full font-inter'>v1.0.1</p>
          <p className=' lg:block border border-purple-600 hidden px-2 py-1 text-xs text-zinc-100 font-semibold bg-zinc-800 rounded-full font-inter'>
            XenonUI v1.0.1 🔥</p>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex space-x-6 items-center'>

          <div className="flex space-x-6 items-center text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `transition font-medium ${isActive ? 'text-[#DB3BF8]' : 'hover:text-zinc-300'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className='flex items-center justify-center gap-2'>
            <button className='flex items-center cursor-pointer justify-center border border-zinc-600 rounded-full p-2 text-zinc-500'>
              <Search className='h-4 ' />
              <h1 className='text-sm pr-4'>Search</h1>
            </button>
            <Link to={"https://github.com/devsujoydas"} target='_blank' className='border border-zinc-600 rounded-full p-2'>
              <svg height="24" viewBox="0 0 24 24" width="24"><path clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="#aab" fillRule="evenodd"></path></svg>
            </Link>
          </div>

          <div>

          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>




      <div className={`${isOpen ? "opacity-100 z-50 duration-500 transition-all" : " opacity-0 -z-50 duration-500 transition-all"} fixed top-0 left-0 bottom-0 right-0 border bg-black   flex justify-center items-center flex-col gap-5`}>
        <X onClick={() => setIsOpen(false)} className='absolute top-5 right-5 cursor-pointer' />
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `transition block text-2xl font-medium ${isActive ? 'text-[#DB3BF8]' : 'hover:text-zinc-300'}`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>


    </nav>
  )
}

export default Header
