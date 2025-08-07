import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'


const DemoCompo = () => {
  const [showCode, setShowCode] = useState(true)
  const codeString = ``

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
          {/* Component */}
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

export default DemoCompo