
const Card1 = () => {

    const techs = ["React", "tailwindcss", "Node", "Express", "MongoDB"]

    return (
        <div className='w-[450px] shadow-lg hover:shadow-xl overflow-hidden hover:-translate-y-1 rounded-2xl  uration-500 transition-all group '>
            <div className={`bg-[#18181B] rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg  h-full gap-5`} >
                <div className="relative h-[200px] md:h-[260px] overflow-hidden rounded-lg">
                    <img
                        src="https://devsujoydas.vercel.app/images/projectimages/nestmartbd-thumbnail.webp"
                        alt="Nest Mart BD"
                        className="absolute top-0 left-0 w-full  object-top transform transition-transform duration-[1500ms] ease-in-out group-hover:-translate-y-[7    5%] active:-translate-y-0 cursor-pointer"
                    />
                </div>
                <div className='flex mt-5 h-full flex-col md:gap-2'>
                    <h3 className="md:text-2xl text-xl font-bold mb-2">Nest Mart BD</h3>
                    <p className="text-zinc-300 mb-3">User-friendly online store offering various products to enhance daily life and convenience.</p>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h1 className="font-semibold md;text-xl">Technologes: </h1>
                        {techs.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <hr className="text-gray-700 pt-2" />

                    <div className="mt-auto grid grid-cols-2 gap-3">
                        <button className="bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 transition-all flex items-center justify-center md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold cursor-pointer" >
                            Live Link
                        </button>
                        <button className="bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 transition-all flex items-center justify-center gap-1 md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold cursor-pointer" >
                            Source Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1