import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (email == "") {
      notify('Email is required')
    } else {
      notify('Email is sent')
    }
  }

  return (
    <div className='max-w-screen-2xl md:mx-auto mt-6'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:p-20 w-full bg-center bg-no-repeat bg-cover md:p-10 p-9 rounded-3xl overflow-hidden md:mt-8 flex flex-col items-start gap-8" >
            <motion.h1
              key={`title-1-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="lg:text-7xl text-2xl font-family-primary font-bold text-black text-left"
            >
              Dont miss amazing <br /> grocery deals
            </motion.h1>

            <motion.p
              key={`desc-1-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ delay: 0.2 }}
              className="text-[15px] lg:text-3xl text-gray-500 font-family-secondary"
            >
              Sign Up for Daily newsletter
            </motion.p>

            <motion.div
              key={`input-1-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="font-family-primary p-1 bg-white flex rounded-full justify-between items-center lg:gap-4 gap-1 md:mt-8 mt-3 overflow-hidden">

                <input
                  name="email"
                  className="focus:outline-none text-sm lg:text-lg font-semibold bg-white text-black w-4/6"
                  type="email"
                  placeholder="Your email address"
                />
                <button
                  className="bg-emerald-500 cursor-pointer text-white lg:px-8 px-3 text-sm md:text-lg py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:p-20 w-full bg-center bg-no-repeat bg-cover md:p-10 p-9 rounded-3xl overflow-hidden md:mt-8 flex flex-col items-start gap-8" >
            <motion.h1
              key={`title-2-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="lg:text-7xl text-2xl font-bold text-black font-family-primary text-left"
            >
              Fresh Vegetables <br /> Big Discounts
            </motion.h1>

            <motion.p
              key={`desc-2-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ delay: 0.2 }}
              className="text-[15px] lg:text-3xl text-gray-500 font-family-secondary"
            >
              Save upto 50% off on your first order
            </motion.p>

            <motion.div
              key={`input-2-${activeIndex}`}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="font-family-primary p-1 bg-white flex rounded-full justify-center items-center lg:gap-4 gap-1 md:mt-8 mt-3 overflow-hidden"
              >
                <div className='lg:ml-5 ml-3 mr-1'>
                  {/* <FaRegPaperPlane className='text-zinc-400 md:text-lg text-sm' /> */}
                </div>
                <input
                  name="email"
                  className="focus:outline-none text-sm lg:text-lg font-semibold bg-white text-black w-4/6"
                  type="email"
                  placeholder="Your email address"
                />
                <button
                  className="bg-emerald-500 cursor-pointer text-white lg:px-8 px-3 text-sm md:text-lg py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero2;
