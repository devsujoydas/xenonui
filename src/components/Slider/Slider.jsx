import { Swiper, SwiperSlide } from 'swiper/react';
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
                slidesPerView={4}
                spaceBetween={30}
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false, 
                }}
                loop={true}
                className=" h-96"
            >
                {
                    imgData.map((data, idx) => (
                        <SwiperSlide className='h-full' key={idx}>
                            <motion.div
                                whileHover={{ y: -10 }}
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

export default Slider