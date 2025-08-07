import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full bg-[#000000]">
            <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#363636_1px,transparent_1px),linear-gradient(to_bottom,#363636_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_90%_50%_at_50%_45%,#000_70%,transparent_110%)]">
                <div className='flex gap-5 font-inter md:mx-0 mx-3'>
                    <div className='text-center space-y-5'>
                        
                        <h1 className='md:text-7xl text-4xl font-semibold'>Make <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>beautiful</span> <br className='lg:block hidden' />  websites regardless of  your <br className='lg:block hidden' /> design experience.</h1>
                        
                        <p className='text-zinc-400 md:text-sm text-sm'>Effortlessly copy and paste stunning, responsive components—no need to <br className='md:block hidden' /> worry about styling or animations. Build quickly and launch faster.</p>
                       
                       
                        <div className='flex justify-center items-center'>
                            <Link to={"/components"} className='flex items-center justify-center gap-1 border border-transparent hover:border-[#CC42F8] cursor-pointerfont-semibold md:px-4 px-2 md:py-3 py-1 rounded-md bg-[#CC42F8] hover:bg-black hover:text-[#CC42F8] active:scale-95 hover:rounded-full transition-all duration-300 md:text-sm text-xs'>Browse Components
                                <ArrowRight className='w-5' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero