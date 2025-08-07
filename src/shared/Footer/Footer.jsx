import { Earth, Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' text-sm flex gap-2 justify-between items-center md:flex-row flex-col-reverse px-10 py-10 bg-[#0f081d]'>
      <h1><span className='font-semibold
      '>XenonUI.</span> © 2025 All rights reserved.</h1>

      <div className='flex items-center gap-2'>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://devsujoydas.vercel.app"} target='_blank'>
          <Earth className='w-5' />
        </Link>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://github.com/devsujoydas"} target='_blank'>
          <Github className='w-5' />
        </Link>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://youtube.com/@devsujoydas"} target='_blank'>
          <Youtube className='w-5' />
        </Link>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://facebook.com/devsujoydas"} target='_blank'>
          <Facebook className='w-5' />
        </Link>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://instagram.com/devsujoydas"} target='_blank'>
          <Instagram className='w-5' />
        </Link>
        <Link className=' text-zinc-300 px-2 py-1.5 hover:bg-[#CC42F8]  rounded-full duration-500 transition-all ' to={"https://www.linkedin.com/in/devsujoydas/"} target='_blank'>
          <Linkedin className='w-5' />
        </Link>
      </div>

      <h1>Built by <a target='_blank' href="https://devsujoydas.vercel.app" className='font-semibold text-[#CC42F8]'>Sujoy Das </a> </h1>
    </div>
  )
}

export default Footer