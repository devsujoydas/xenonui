import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'


const CompoSideNav = ({ setShowCompoNav }) => {
    const { compo } = useContext(AuthContext)
    return (
        <div className='absolute z-50 bg-black border border-zinc-900  mr-5 p-2 rounded-md w-60 h-[80vh] overflow-hidden'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl '>Components</h1>
                <X className='cursor-pointer' onClick={() => setShowCompoNav(false)} />
            </div>
            <div className='md:grid hidden mt-5 gap-1 rounded-sm p-2  overflow-y-auto h-full hide-scrollbar'>
                {compo.map((com, idx) => (
                    <NavLink 
                        className={({ isActive }) => `py-2 text-sm px-2 rounded-md   ${isActive ? 'text-[#DB3BF8] bg-zinc-800' : 'hover:bg-zinc-800'}`}
                        key={idx} to={com.path}
                    >{com.name}
                    </NavLink>
                ))}
            </div>
            <div className='md:hidden grid  mt-5 gap-1 rounded-sm p-2  overflow-y-auto h-full hide-scrollbar'>
                {compo.map((com, idx) => (
                    <NavLink  onClick={() => setShowCompoNav(false)} 
                        className={({ isActive }) => `py-2 text-sm px-2 rounded-md   ${isActive ? 'text-[#DB3BF8] bg-zinc-800' : 'hover:bg-zinc-800'}`}
                        key={idx} to={com.path}
                    >{com.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default CompoSideNav