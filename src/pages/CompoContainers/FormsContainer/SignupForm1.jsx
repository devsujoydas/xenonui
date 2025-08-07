import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Signup from '../../../components/Signup/Signup'

const SignupForm1 = () => {
    const [showCode, setShowCode] = useState(true)
    const npmRef = useRef(null);
    const codeRef = useRef(null);
    const codeString = `
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User } from "lucide-react";

const Signup = () => {
    const [show, setShow] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (e) => {
        setLoadingSpinner(false)
    };

    return (
        <div className=" bg-white w-[420px] p-5 md:p-8 rounded-xl">
            <div className="h-full flex justify-center items-center">
                <div className=" w-full">
                    <div className="text-black">
                        <div className="flex justify-center items-center">
                            <div className="border w-fit bg-black p-2 rounded-full ">
                                <User className="text-white" />
                            </div>
                        </div>
                        <h1 className="md:text-3xl mt-3 text-center text-2xl md:mb-3 mb-2 font-semibold">Signup Now</h1>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="w-full space-y-3 md:space-y-4">
                        <div>
                            <label className="text-slate-800 text-sm font-medium mb-1 block">Username</label>
                            <input type="text" placeholder="Enter Username" {...register("username", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            {errors.username && <p className="text-red-500 text-sm mt-1">Username is required</p>}
                        </div>
                        <div>
                            <label className="text-slate-800 text-sm font-medium mb-1 block">Email</label>
                            <input type="email" placeholder="Enter email" {...register("email", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="relative">
                            <label className="text-slate-800 text-sm font-medium mb-1 block ">Password</label>
                            <input type={show ? "text" : "password"} placeholder="Enter password" {...register("password", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            <div onClick={() => setShow(!show)} className="text-xl absolute top-9 right-3 cursor-pointer active:scale-95 transition-all">
                                {show ? <Eye className="text-zinc-500 w-5" /> : <EyeOff className="text-zinc-500 w-5" />}
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-slate-300 rounded cursor-pointer" />
                                <label htmlFor="remember-me" className="text-black  ml-3 text-sm cursor-pointer">Remember me</label>
                            </div>
                        </div>
                       <button type = "submit" className = { \`text-white font-medium \${loadingSpinner ? "bg-blue-700" : "bg-blue-500"} hover:bg-blue-500 w-full py-3 rounded-md cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-5\`}>
                            <p className={\`\${loadingSpinner ? "hidden" : "block"} border-t-2 border-b-2 rounded-full w-6 h-6 animate-spin\`} />
                            <p className={\`\${loadingSpinner ? "block" : "hidden"}\`}>Login</p>
                        </button>
                    </form>
                    <div className="text-zinc-500 text-xs md:text-sm text-center font-inter flex items-center justify-center gap-0 my-5">
                        <div class="w-2/3 border-t border-gray-300"></div>
                        <p className=" px-2">Or</p>
                        <div class="w-2/3 border-t border-gray-300"></div>
                    </div>
                    <button className="flex my-2 justify-center items-center gap-1 border border-zinc-300 w-full py-1 rounded-md hover:bg-zinc-100 cursor-pointer active:scale-95 transition-all">
                        <img className="w-10 h-10 rounded-full" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <h1 className="text-black font-medium ">Sign in with Google</h1>
                    </button>
                    <p className="text-slate-800 text-sm text-center">Already have an account? <Link to="" className="text-violet-600 font-semibold hover:underline ml-1">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

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
            <h1 className='font-inter font-semibold text-xl md:text-2xl'>2. SignUp Form</h1>
            <div className='my-5 flex gap-3 font-medium md:text-[14px] text-xs '>
                <button onClick={() => setShowCode(true)} className={`cursor-pointer  ${showCode ? "text-zinc-300" : "text-zinc-500"}`}>Preview</button>
                <button onClick={() => setShowCode(false)} className={`cursor-pointer ${showCode ? "text-zinc-500" : "text-zinc-300"} `}>Code</button>
            </div>
            {showCode ?
                <div className='border border-zinc-700 rounded-xl md:p-10 flex justify-center items-center'>
                    {/* Component  */}
                    <Signup />
                </div>
                :
                <div className='h-[50vh] hide-scrollbar overflow-y-auto border  border-zinc-500 rounded-xl p-4'>

                    <div className='rounded-xl '>
                        <h1 className='text-zinc-300 md:text-3xl text-xl mb-2'>Installation</h1>
                        <pre className="flex justify-between items-center bg-gray-900 text-zinc-300 text-sm p-4 rounded-md overflow-x-auto">
                            <code ref={npmRef} className='md:text-[14px] text-xs'>
                                npm i react-router-dom react-hook-form lucide-react
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

export default SignupForm1