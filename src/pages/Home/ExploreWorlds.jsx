import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Slider from "../../components/Slider/Slider";

const ExploreWorlds = () => {
    return (
        <div className='min-h-[70vh] max-w-7xl xl:mx-auto md:mx-10 mx-3 '>

            <div className='text-center'>
                <h1 className='md:text-5xl text-3xl font-semibold '>Explore Worlds</h1>
                <p className='text-zinc-400 md:mt-4 mt-2'>Drag to journey through magical landscapes.</p>
            </div>

            <div className="mt-10 ">
                <div className="flex justify-center items-center px-5">
                    <Slider />
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Link to={"/components/carousel"} className="flex items-center gap-2 text-zinc-400 text-sm">Discover More <ArrowRight className="w-5" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ExploreWorlds