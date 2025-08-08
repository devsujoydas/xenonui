import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import AuthContext from '../../context/AuthContext'
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const Header = () => {
  const { compo } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const [searchText, setSearchText] = useState("");
  const filteredData = compo.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
                key={link.name} to={link.path}
                className={({ isActive }) => `transition font-medium ${isActive ? 'text-[#DB3BF8]' : 'hover:text-zinc-300'}`}
              > {link.name} </NavLink>
            ))}
          </div>

          <div className='flex items-center justify-center gap-2'>
            <button onClick={() => setIsOpenSearch(true)} className='flex active:scale-95 transition-all duration-300 items-center cursor-pointer justify-center border border-zinc-600 rounded-full p-2 text-zinc-500'>
              <Search className='h-4 ' />
              <h1 className='text-sm pr-4'>Search</h1>
            </button>
            <Link to={"https://github.com/devsujoydas"} target='_blank' className='border border-zinc-600 rounded-full p-2'>
              <FaGithub className='text-xl' />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
          > {isOpen ? <X size={28} /> : <Menu size={28} />} </button>
        </div>
      </div>



      {/* Nav for small */}
      <div className={`${isOpen ? "opacity-100 z-50 duration-500 transition-all" : " opacity-0 -z-50 duration-500 transition-all"} fixed top-0 left-0 bottom-0 right-0 border bg-black   flex justify-center items-center flex-col gap-5`}>
        <X onClick={() => setIsOpen(false)} className='absolute top-5 right-5 cursor-pointer' />
        {navLinks.map((link) => (
          <NavLink
            key={link.name} to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `transition block text-2xl font-medium ${isActive ? 'text-[#DB3BF8]' : 'hover:text-zinc-300'}`}
          >{link.name}</NavLink>
        ))}
      </div>



      {/* Search Modal */}
      <AnimatePresence>
        {isOpenSearch && (
          <motion.div
            key="overlay"
            className="bg-[#000000c5] fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            onClick={() => setIsOpenSearch(false)}
          >
            <motion.div
              key="modal"
              className="bg-black w-96 mx-5 md:mx-0 md:w-[600px] border border-zinc-700 rounded-xl p-5"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Box */}
              <button className="flex w-full items-center cursor-pointer border border-zinc-600 rounded-full md:p-3 p-2 text-zinc-300">
                <Search className="h-5 mr-1" />
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText} type="search" placeholder="Search"
                  className="outline-none text-sm w-full bg-transparent"
                />
              </button>

              {/* Search Results / No Results */}
              <div className="text-center text-zinc-400 flex flex-col justify-center items-center mt-5 h-full">
                {searchText ? (
                  filteredData.length > 0 ? (
                    <ul className="w-full text-left space-y-2 overflow-y-auto max-h-90 hide-scrollbar">
                      {filteredData.map((item) => (
                        <Link
                          to={item.path} key={item.name} onClick={() => { setIsOpenSearch(false) }}
                          className="bg-zinc-700 text-white border border-zinc-700 block rounded-md hover:bg-zinc-800 transition"
                        > <li className="md:p-4 p-2 md:text-[14px] text-sm">{item.name}</li> </Link>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-10">
                      <h1>No results for "{searchText}"</h1>
                      <p>Try adding more characters to your search term.</p>
                    </div>
                  ))
                  :
                  (<p className="h-40 flex items-center">Start typing to search...</p>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  )
}

export default Header
