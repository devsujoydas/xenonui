import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className="relative h-screen w-full bg-[#0f172a] ">
            <div className="flex justify-center items-center absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,1)_100%)]">
                <div className='text-center space-y-5'>
                    <h1
                        className='text-7xl font-semibold text-[#cbbef7]'>
                        404
                    </h1>
                    <h1
                        className='text-5xl font-semibold text-[#CA42F8]'>
                        Page Not Found
                    </h1>
                    <button
                        onClick={() => { navigate(-1) }}
                        className='bg-[#CA42F8] text-white  px-4 py-2 rounded-md cursor-pointer hover:bg-[#cb42f8a1] border border-transparent hover:border-[#CA42F8] transition-all duration-500'
                    >Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage