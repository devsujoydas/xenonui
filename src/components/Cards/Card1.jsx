import { Link } from 'lucide-react'
import React from 'react'

const Card1 = () => {
  return (
    <div>
            <div className='shadow-lg hover:shadow-xl overflow-hidden hover:-translate-y-1 rounded-2xl  uration-500 transition-all group '> 
                <div className={`bg-[#18181B] rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg  h-full gap-5`} >
                   
                    <div className='relative h-[200px] md:h-[260px]  overflow-hidden rounded-lg'>
                        <Link to={``}>
                            <img
                                src={""}
                                alt={""}               
                                className="absolute top-0  object-cover object-top   transition-all duration-1000"
                            />
                        </Link>
                    </div> 
                    <div className='flex mt-5 h-full flex-col md:gap-2'>
                        <h3 className="md:text-2xl text-xl font-bold mb-2">{""}</h3>
                        <p className="text-zinc-300 mb-3">{""}</p>
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                            <h1 className="font-semibold md;text-xl">Technologes: </h1>
                            {/* {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))} */}
                        </div> 

                        <hr className="text-gray-700 pt-2" />
 
                        <div className="mt-auto  grid grid-cols-2 gap-3">
                            <a target='_blank' href={""} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold" >
                                <TbWorld className='md:text-2xl text-sm' /> {""}
                            </a>
                            <Link to={``} className="bg-gray-600 hover:bg-gray-700 transition-all flex items-center justify-center gap-1 md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold" >
                                View Details
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Card1