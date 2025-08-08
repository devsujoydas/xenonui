
import { Link } from "react-router-dom";
import { Heart, HeartIcon, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Card2 = ({ product }) => {
    const [showImg, setShowImg] = useState(true);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const addToCart = () => { toast.success("Add to cart") }


    return (
        <div className="md:w-[300px] font-inter ">
            <div
                className="border h-full flex flex-col justify-between group border-zinc-100 hover:border-emerald-200 relative overflow-hidden shadow-xl p-3 lg:p-6 md:rounded-2xl rounded-xl hover:shadow-2xl transition bg-white text-black "
            >
                <span className="bg-emerald-600  text-white text-xs px-4 py-1 rounded-br-2xl z-20 absolute top-0 left-0">Organic</span>

                <div onMouseEnter={() => setShowImg(false)} onMouseLeave={() => setShowImg(true)} className="2xl:h-58 overflow-hidden relative md:mb-3 rounded-md cursor-pointer ">
                    <Link to={``}>
                        <div className={`w-full h-full ${showImg ? " opacity-100 z-10 transition-all duration-500" : "opacity-0 z-0 transition-all duration-500"}`} >
                            <img className="w-full  " src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg" alt="" />
                        </div>
                    </Link>
                    
                    <div className={`absolute top-0 w-full h-full ${showImg ? "opacity-0 z-0 transition-all duration-500" : "opacity-100 z-10 transition-all duration-500"}`}>
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                            style={{ backgroundImage: `url("https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-2.jpg")` }}
                        >
                            <button
                                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-600 border border-zinc-200 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 cursor-pointer"
                            >
                                {isWishlisted ? (
                                    <Heart onClick={() => setIsWishlisted(!isWishlisted)} className="w-5 h-5 text-red-500" />
                                ) : (
                                    <HeartIcon onClick={() => setIsWishlisted(!isWishlisted)} className="w-5 h-5" />
                                )}
                            </button>
                            <Link
                                to={``}
                                className="absolute inset-0"
                                tabIndex={-1}
                            >
                                {/* Empty link to cover the image for navigation, but not the wishlist button */}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p href="#" className="text-gray-400 text-xs hover:text-emerald-400">
                        Grains & Rice
                    </p>
                    <Link to={``} className="font-semibold my-1 leading-none hover:text-emerald-500 transition-colors md:text-lg text-sm">
                        Seeds of Change Organic Quinoa, Brown, & Red Rice
                    </Link>
                </div>

                <div className="flex text-orange-300 ">
                    <Star className="w-4" /> <Star className="w-4" /> <Star className="w-4" /> <Star className="w-4" />
                </div>

                <h1 className="mt-2 text-xs">
                    By{" "}
                    <span>
                        <a href="#" className="text-emerald-500 hover:-translate-x-1 hover:-translate-y-1 hover:text-orange-400 text-xs md:text-sm">Seeds of Change</a>
                    </span>
                </h1>

                <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center  gap-1">
                        <h1 className="text-emerald-500 font-bold md:text-xl text-sm">
                            3.99
                        </h1>
                        <h1 className="text-xs text-zinc-400 line-through font-bold ">
                            $4.49
                        </h1>
                    </div>
                    <button
                        onClick={() => addToCart()}
                        className="bg-emerald-100 hover:bg-emerald-500 text-emerald-600 hover:text-white font-semibold px-2 lg:px-6 md:py-1.5 py-1 md:rounded-md rounded-sm flex justify-between items-center gap-1 hover:-translate-y-1 active:scale-95 transition duration-300 md:text-sm text-xs cursor-pointer"
                    >
                        <ShoppingCart className="md:w-5 w-4" />
                        <h1 className="">Add</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card2;