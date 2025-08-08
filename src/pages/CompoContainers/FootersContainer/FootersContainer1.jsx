import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Footer1 from '../../../components/Footers/Footer1'

const FootersContainer1 = () => {
    const [showCode, setShowCode] = useState(true)
    const npmRef = useRef(null);
    const codeRef = useRef(null);

    const codeString = `import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiHeadsetLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";
import { TbClockHour5 } from "react-icons/tb";
import { FaYoutube, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { motion } from "framer-motion";

const Footer1 = () => {
  const footerBtnStyle = "hover:text-emerald-500 hover:translate-x-1 text-sm transition active:scale-95 duration-300";
  const socialBtnStyle = "text-white text-3xl cursor-pointer hover:bg-emerald-400 active:scale-95 transition-all bg-emerald-500 rounded-full p-1.5";

  // Container variants for staggering children
  const containerVariants = {
    hidden: {}, visible: { transition: { staggerChildren: 0.15, } },
  };

  // Each section fade-up animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-screen-2xl lg:mx-auto font-family-primary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <footer className="mt-10 md:mx-10 2xl:mx-0 mx-3">

        <div className="grid md:gap-2 gap-5  md:grid-cols-10">
          {/* Left column */}
          <motion.div className="md:col-span-3" variants={sectionVariants}>
            <img
              className="md:w-fit w-1/2"
              src="https://nestmartbd.vercel.app/assets/svgs/logo.svg"
              alt="Nest Mart Logo"
            />
            <p className="font-bold text-xl text-left mt-2">
              Awesome Grocery <br className="md:block hidden" /> Store
            </p>
            <div className="grid gap-2 text-sm mt-5">
              <div className="flex lg:text-left text-center flex-row lg:items-start items-center gap-2">
                <HiOutlineLocationMarker className="text-xl text-emerald-500" />
                <div className="flex flex-row gap-1">
                  <p className="font-semibold">Address:</p>
                  <span>Jamalpur, Bangladesh</span>
                </div>
              </div>
              <div className="flex items-center flex-row gap-2">
                <PiHeadsetLight className="text-xl text-emerald-500" />
                <p className="font-semibold">Call Us:</p>
                <a className={footerBtnStyle} href="tel:+8801303436299">
                  +8801303436299
                </a>
              </div>
              <div className="flex items-center flex-row gap-2 flex-wrap">
                <FaRegPaperPlane className="text-xl text-emerald-500" />
                <p className="font-semibold">Email:</p>
                <a href="mailto:devsujoydas@gmail.com" className={footerBtnStyle}>
                  devsujoydas@gmail.com
                </a>
              </div>
              <div className="flex items-center flex-row gap-2">
                <TbClockHour5 className="text-xl text-emerald-500" />
                <p className="font-semibold">Hours:</p>
                <span> 10:00 - 18:00, Mon-Sat</span>
              </div>
            </div>
          </motion.div>

          {/* Right columns */}
          <motion.div className="md:col-span-7 grid-cols-2 grid md:grid-cols-4  gap-5" variants={sectionVariants}>
            {/* Company */}
            <motion.div className="flex flex-col gap-2 md:gap-3" variants={sectionVariants}>
              <h1 className=" text-xl md:text-2xl font-semibold">Company</h1>
              <Link to="" className={footerBtnStyle}>Blogs</Link>
              <Link to="" className={footerBtnStyle}>Stores</Link>
              <Link to="" className={footerBtnStyle}>Products</Link>
              <Link to="" className={footerBtnStyle}>About Us</Link>
              <Link to="" className={footerBtnStyle}>Contact Us</Link>
              <Link to="" className={footerBtnStyle}>Order Tracking</Link>
              <Link to="" className={footerBtnStyle}>Support Center</Link>
            </motion.div>

            {/* Corporate */}
            <motion.div className="flex flex-col gap-2 md:gap-3" variants={sectionVariants}>
              <h1 className=" text-xl md:text-2xl font-semibold">Corporate</h1>
              <a href="" className={footerBtnStyle}>Become a Vendor</a>
              <a href="" className={footerBtnStyle}>Affiliate Program</a>
              <a href="" className={footerBtnStyle}>Farm Business</a>
              <a href="" className={footerBtnStyle}>Farm Careers</a>
              <a href="" className={footerBtnStyle}>Our Suppliers</a>
              <a href="" className={footerBtnStyle}>Accessibility</a>
              <a href="" className={footerBtnStyle}>Promotions</a>
            </motion.div>

            {/* Popular */}
            <motion.div className="flex flex-col gap-2 md:gap-3" variants={sectionVariants}>
              <h1 className=" text-xl md:text-2xl font-semibold">Popular</h1>
              <a href="" className={footerBtnStyle}>Milk & Flavoured Milk</a>
              <a href="" className={footerBtnStyle}>Butter and Margarine</a>
              <a href="" className={footerBtnStyle}>Eggs Substitutes</a>
              <a href="" className={footerBtnStyle}>Marmalades</a>
              <a href="" className={footerBtnStyle}>Sour Cream and Dips</a>
              <a href="" className={footerBtnStyle}>Tea & Kombucha</a>
              <a href="" className={footerBtnStyle}>Cheese</a>
            </motion.div>

            {/* Install App */}
            <motion.div className="flex flex-col  gap-1 lg:gap-2"
              variants={sectionVariants}
            >
              <h1 className=" text-xl md:text-2xl font-semibold">Install App</h1>
              <div className="flex flex-col justify-around h-full">
                <div className="flex flex-col gap-3">
                  <h1>From App Store or Google Play</h1>
                  <div className="flex gap-2 lg:flex-row flex-col">
                    <a href="#ios-store" aria-label="App Store">
                      <img
                        className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                        src="https://nestmartbd.vercel.app/assets/others/app-store.jpg"
                        alt="App Store"
                      />
                    </a>
                    <a href="#play-store" aria-label="Google Play Store">
                      <img
                        className="w-3/4 lg:w-full hover:shadow-md hover:-translate-y-1 transition"
                        src="https://nestmartbd.vercel.app/assets/others/google-play.jpg"
                        alt="Google Play Store"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h1>Secured Payment Gateways</h1>
                  <div className="flex gap-2">
                    <img
                      className="w-full"
                      src="https://nestmartbd.vercel.app/assets/others/payment-method.png"
                      alt="Payment Methods"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Contact Us Bottom Bar */}
        <motion.div
          id="contact-us"
          className="flex lg:flex-row flex-col-reverse gap-4 justify-between items-center max-w-screen-2xl mx-auto border-emerald-600 border-t py-8 mt-10"
          variants={sectionVariants}
        >
          <div className="flex flex-col text-center">
            <h1 className="text-sm">
              &copy; 2025, <span>Nest</span> - Ecommerce <br className="md:block hidden" /> By{" "}
              <Link
                to={"https://devsujoydas.vercel.app"}
                className="text-emerald-600 hover:text-emerald-500 transition-all font-bold"
              >
                Sujoy Das
              </Link>
            </h1>
            <h1 className="text-sm">All rights reserved</h1>
          </div>

          <div className="flex md:flex-row flex-col-reverse md:gap-6 gap-3">
            <div className="flex gap-2 items-center">
              <LuPhoneCall className="md:text-3xl text-2xl text-zinc-500" />
              <div className="flex flex-col gap-2 lg:items-start items-center">
                <a
                  href="tel:+8809638-831422"
                  className="md:text-xl text-sm font-semibold text-emerald-500 active:scale-95 transition-all"
                >
                  +8809638-831422
                </a>
                <h1 className="md:text-sm text-xs text-gray-500 -mt-2">
                  Working 8:00 - 22:00
                </h1>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <LuPhoneCall className="md:text-3xl text-2xl text-zinc-500" />
              <div className="flex flex-col gap-2 lg:items-start items-center">
                <a
                  href="tel:+8801303436299"
                  className="md:text-xl text-sm font-semibold text-emerald-500 active:scale-95 transition-all"
                >
                  +8801303-436299
                </a>
                <h1 className="md:text-sm text-xs text-gray-500 -mt-2">
                  24/7 Support Center
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 mt-2">
                <h1 className="font-semibold mr-1">Follow Us</h1>

                <a
                  href="https://web.facebook.com/devsujoydas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className={socialBtnStyle} />
                </a>

                <a
                  href="https://github.com/devsujoydas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub className={socialBtnStyle} />
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=%2B8801303436299&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className={socialBtnStyle} />
                </a>

                <a
                  href="https://www.youtube.com/@devsujoydas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube className={socialBtnStyle} />
                </a>

                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className={socialBtnStyle} />
                </a>
              </div>
            </div>
            <h1 className="text-xs mt-2">Up to 15% discount on your first subscribe</h1>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
};

export default Footer1;
`

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
            <h1 className='font-inter font-semibold text-xl md:text-2xl'>1. Footer 1</h1>
            <div className='my-5 flex gap-3 font-medium md:text-[14px] text-xs '>
                <button onClick={() => setShowCode(true)} className={`cursor-pointer  ${showCode ? "text-zinc-300" : "text-zinc-500"} `}>Preview</button>
                <button onClick={() => setShowCode(false)} className={`cursor-pointer ${showCode ? "text-zinc-500" : "text-zinc-300"} `}>Code</button>
            </div>
            {showCode ?
                <div className='border border-zinc-700 rounded-xl md:p-10 flex justify-center items-center'>
                    <Footer1 />
                </div>
                :
                <div className='h-[50vh] hide-scrollbar overflow-y-auto border  border-zinc-500 rounded-xl p-4 '>

                    <div className='rounded-xl '>
                        <h1 className='text-zinc-300 md:text-3xl text-xl mb-2'>Installation</h1>
                        <pre className="flex justify-between items-center bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
                            <code ref={npmRef} className='md:text-[14px] text-xs'>
                                npm i react-router-dom react-icons framer-motion
                            </code>
                            <button>
                                <Copy onClick={() => handleCopyNpm()} className='w-4 cursor-pointer text-zinc-500 hover:text-white active:text-zinc-500 active:scale-95 transition-all duration-300' />
                            </button>
                        </pre>

                        <h1 className='text-zinc-300 md:text-3xl text-xl mt-5 mb-2'>Code</h1>
                        <pre className="flex justify-between items-start bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
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

export default FootersContainer1