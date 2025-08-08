
import { ArrowRightCircle } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import CompoSideNav from '../../shared/Header/CompoSideNav'

const MainComponentPage = () => {


  const [showCompoNav, setShowCompoNav] = useState(false)

  return (

    <div className=' h-full '>

      <div className='relative'>

        <div className='absolute left-30 top-10'>
          <CompoSideNav setShowCompoNav={setShowCompoNav} />
        </div>
        {/* {showCompoNav ?
          :
          <button onClick={() => { setShowCompoNav(true) }} className='ml-2 mt-2 fixed top-[50vh] cursor-pointer flex z-10 justify-center items-center  border rounded-full border-zinc-600  bg-zinc-800 '>
            <ArrowRightCircle className='w-10 h-10' />
          </button>
        } */}
      </div>

      {/* Main content */}
      <div className='rounded-md md:min-h-screen md:p-10 max-w-6xl lg:mx-auto md:mx-10 mx-5 md:py-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainComponentPage