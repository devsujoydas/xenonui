import React from 'react'
import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Card1 from '../../../components/Cards/Card1'




const CardsContainer1 = () => {
  const [showCode, setShowCode] = useState(true)
  const npmRef = useRef(null);
  const codeRef = useRef(null);

  const codeString = `import { motion } from "framer-motion";

const Card1 = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const techs = ["React", "tailwindcss", "Node", "Express", "MongoDB"];

    return (
        <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className='w-[450px] shadow-lg hover:shadow-xl overflow-hidden hover:-translate-y-1 rounded-2xl duration-500 transition-all group'
        >
            <div className="bg-[#18181B] rounded-2xl overflow-hidden md:p-5 p-3 shadow-lg h-full gap-5">
                <div className="relative h-[200px] md:h-[260px] overflow-hidden rounded-lg">
                    <img
                        src="https://devsujoydas.vercel.app/images/projectimages/nestmartbd-thumbnail.webp"
                        alt="Nest Mart BD"
                        className="absolute top-0 left-0 w-full object-top transform transition-transform duration-[1500ms] ease-in-out group-hover:-translate-y-[75%] active:-translate-y-0 cursor-pointer"
                    />
                </div>
                <div className="flex mt-5 h-full flex-col md:gap-2">
                    <h3 className="md:text-2xl text-xl font-bold mb-2">Nest Mart BD</h3>
                    <p className="text-zinc-300 mb-3">
                        User-friendly online store offering various products to enhance daily life and convenience.
                    </p>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                        <h1 className="font-semibold md:text-xl">Technologes: </h1>
                        {techs.map((tech, i) => (
                            <span key={i}
                                className="bg-gray-800 border border-gray-500 text-xs px-3 py-1 rounded-full"
                            >{tech}</span>
                        ))}
                    </div>

                    <hr className="text-gray-700 pt-2" />

                    <div className="mt-auto grid grid-cols-2 gap-3">
                        <button className="bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 transition-all flex items-center justify-center md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold cursor-pointer">
                            Live Link
                        </button>
                        <button className="bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 transition-all flex items-center justify-center gap-1 md:gap-2 md:px-4 py-2 rounded-md md:text-sm text-xs font-semibold cursor-pointer">
                            Source Code
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Card1;

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
      <h1 className='font-inter font-semibold text-xl md:text-2xl'>1. Card 1</h1>
      <div className='my-5 flex gap-3 font-medium md:text-[14px] text-xs '>
        <button onClick={() => setShowCode(true)} className={`cursor-pointer  ${showCode ? "text-zinc-300" : "text-zinc-500"}`}>Preview</button>
        <button onClick={() => setShowCode(false)} className={`cursor-pointer ${showCode ? "text-zinc-500" : "text-zinc-300"} `}>Code</button>
      </div>
      {showCode ?
        <div className='border border-zinc-700 rounded-xl md:p-10 flex justify-center items-center'>
          {/* Component  */}
          <Card1 />
        </div>
        :
        <div className='h-[50vh] hide-scrollbar overflow-y-auto '>

          <div className='rounded-xl '>
            <h1 className='text-zinc-300 md:text-3xl text-xl mb-2'>Installation</h1>
            <pre className="flex justify-between items-center bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
              <code ref={npmRef} className='md:text-[14px] text-xs'>
                npm i framer-motion
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

export default CardsContainer1