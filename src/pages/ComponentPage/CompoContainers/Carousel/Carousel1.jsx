import React from 'react'
import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Slider from '../../../../components/Slider/Slider'

const Carousel1 = () => {

    const [showCode, setShowCode] = useState(true)
    const codeString = `import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { motion } from "framer-motion";
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    const imgData = [
        {
            "imgUrl": "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
            "content": "Misty mountain valley with a glowing sunrise."
        },
        {
            "imgUrl": "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
            "content": "Calm ocean with waves crashing on rocky cliffs."
        },
        {
            "imgUrl": "https://images.pexels.com/photos/34950/pexels-photo.jpg",
            "content": "Snowy forest path leading to a hidden cabin."
        },
        {
            "imgUrl": "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
            "content": "Green hills under a sky filled with dramatic clouds."
        },
        {
            "imgUrl": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
            "content": "Desert landscape with towering sand dunes."
        },
        {
            "imgUrl": "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
            "content": "Night sky full of stars over a quiet lake."
        }
    ]

    return (
        <div className=' cursor-grab active:cursor-grabbing  flex overflow-x-auto gap-5 '>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1440: { slidesPerView: 4, spaceBetween: 20 },
                }}

                className="lg:h-96 h-100 "
            >
                {
                    imgData.map((data, idx) => (
                        <SwiperSlide className='' key={idx}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="rounded-xl h-full overflow-hidden"
                            >
                                <img
                                    className="h-full w-full object-cover hover:scale-105 transition-all duration-500 delay-100"
                                    src={data.imgUrl}
                                    alt={data.content}
                                />
                            </motion.div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default Slider`;


    const npmRef = useRef(null);
    const codeRef = useRef(null);
    const handleCopyNpm = () => {
        const text = npmRef.current?.innerText;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success("npm copied!");
            });
        }
    };
    const handleCopycode = () => {
        const text = codeRef.current?.innerText;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                toast.success("Code copied!");
            });
        }
    };


    return (
        <div className='mt-5 md:mt-10'>
            <div className='my-5 flex gap-3 font-medium md:text-[14px] text-xs '>
                <button onClick={() => setShowCode(true)} className={`cursor-pointer  ${showCode ? "text-zinc-300" : "text-zinc-500"}`}>Preview</button>
                <button onClick={() => setShowCode(false)} className={`cursor-pointer ${showCode ? "text-zinc-500" : "text-zinc-300"} `}>Code</button>
            </div>
            {showCode ?
                <div className='border border-zinc-700 rounded-xl md:p-5'>
                    <Slider />
                </div>
                :
                <div className='h-[50vh] hide-scrollbar overflow-y-auto border  border-zinc-500 rounded-xl p-4 '>

                    <div className='rounded-xl '>
                        <h1 className='text-zinc-300 md:text-3xl text-xl mb-2'>Installation</h1>
                        <pre className="flex justify-between items-center bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
                            <code ref={npmRef} className='md:text-[14px] text-xs'>
                                npm i swiper motion
                            </code>
                            <button>
                                <Copy onClick={() => handleCopyNpm()} className='w-4 cursor-pointer text-zinc-500 hover:text-white active:text-zinc-500 active:scale-95 transition-all duration-300' />
                            </button>
                        </pre>

                        <h1 className='text-zinc-300 md:text-3xl text-xl mt-5 mb-2'>Code</h1>
                        <pre className="flex justify-between items-start bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto relative">
                            <code ref={codeRef} className='md:text-[14px] text-xs'>{codeString}</code>
                            <button className='sticky top-0 right-0'>
                                <Copy onClick={() => handleCopycode()} className='w-4 cursor-pointer text-zinc-500 hover:text-white active:text-zinc-500 active:scale-95 transition-all duration-300' />
                            </button>
                        </pre>
                    </div>
                </div>
            }
        </div>
    )
}

export default Carousel1