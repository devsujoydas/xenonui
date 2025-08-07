import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Slider from "../../components/Slider/Slider";

const ExploreWorlds = () => {
    return (
        <div className='min-h-[70vh] max-w-7xl 2xl:mx-auto md:mx-10 mx-3 '>

            <div className='text-center'>
                <h1 className='text-5xl font-semibold '>Explore Worlds</h1>
                <p className='text-zinc-400 mt-4'>Drag to journey through magical landscapes.</p>
            </div>

            <div className="mt-10">
                <Slider />
                <div className="flex justify-center items-center mt-5">
                    <Link to={"/components"} className="flex items-center gap-2 text-zinc-400 text-sm">Discover More <ArrowRight className="w-5" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ExploreWorlds