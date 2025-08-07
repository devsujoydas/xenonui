import { div } from 'framer-motion/client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigationPath = ({ title, desc, desc1 }) => {
    const navigate = useNavigate()
    return (
        <div className='flex md:items-center items-start justify-between'>
            <div>
                <h1 className='md:text-4xl text-2xl font-semibold text-zinc-300'>{title}</h1>
                <p className='md:text-sm text-xs text-zinc-400 mt-2'>{desc}</p>
                <p className='md:text-sm text-xs text-zinc-400 '>{desc1}</p>
            </div>
            <div className='flex md:gap-5 gap-3 text-zinc-300 '>
                <button onClick={()=>navigate(-1)}><ArrowLeft className='md:w-fit w-4 cursor-pointer hover:text-white active:text-zinc-500 active:scale-95 transition-all duration-300'/></button>
                <button onClick={()=>navigate(+1)}><ArrowRight className='md:w-fit w-4 cursor-pointer hover:text-white active:text-zinc-500 active:scale-95 transition-all duration-300'/></button>
            </div>
        </div>
    )
}

export default NavigationPath