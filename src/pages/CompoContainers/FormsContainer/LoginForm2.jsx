import { useRef, useState } from 'react'
import { Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import Login2 from '../../../components/Login/Login2'

const LoginForm2 = () => {
    const [showCode, setShowCode] = useState(true)
    const npmRef = useRef(null);
    const codeRef = useRef(null);

    const codeString = `
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const Login2 = () => {
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
                        <div className="flex justify-center  items-center">
                            <div className="border w-fit bg-black  p-5 rounded-full ">
                                <div className="border w-fit bg-white  p-0.5 rounded-full ">
                                    <User className="text-black w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <h1 className="md:text-3xl text-2xl mt-3 text-center font-semibold">Welcome Back</h1>
                        <p className="text-zinc-600 font-inter text-sm text-center font-light">Sign in to your account to continue shopping</p>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="w-full mt-5 space-y-3 md:space-y-4">
                        <div>
                            <label className="text-slate-500 text-sm  mb-2 block">Email Address</label>
                            <div className="relative">
                                <Mail className="text-zinc-500 w-5 absolute top-3 left-3" />
                                <input type="email" placeholder="Enter email" {...register("email", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm pl-10 pr-4 py-3 rounded-md outline-zinc-500" />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="relative">
                            <label className="text-slate-500 text-sm  mb-2 block ">Password</label>
                            <div className="relative">
                                <Lock className="text-zinc-500 w-5 absolute top-3 left-3" />
                                <input type={show ? "text" : "password"} placeholder="Enter password" {...register("password", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm pl-10 pr-4 py-3 rounded-md outline-zinc-500" />
                            </div>
                            <div onClick={() => setShow(!show)} className="text-xl absolute top-10 right-3 cursor-pointer active:scale-95 transition-all">
                                {show ? <Eye className="text-zinc-500 w-5" /> : <EyeOff className="text-zinc-500 w-5" />}
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>
                        <div className="text-right font-inter">
                            <Link to="" className="text-black  text-sm hover:underline ml-1">Forgot your password??</Link>
                        </div>
                        <button type = "submit" className = { \`text-white font-medium \${loadingSpinner ? "bg-[#1F2937]" : "bg-[#384250]"} hover:bg-[#384250] w-full py-3 rounded-md cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-5\`}>
                            <p className={\`\${loadingSpinner ? "hidden" : "block"} border-t-2 border-b-2 rounded-full w-6 h-6 animate-spin\`} />
                            <p className={\`\${loadingSpinner ? "block" : "hidden"}\`}>Sign In  </p>
                        </button>
                    </form>
                    <div className="text-zinc-500 text-xs md:text-sm text-center font-inter flex items-center justify-center my-5">
                        <div class="w-1/3  border-t border-gray-300"></div>
                         <p  className="w-full px-2"> Don't have an account?</p> 
                        <div class="w-1/3 border-t border-gray-300"></div>
                    </div>

                    <div className="text-center mt-5">
                        <Link className="flex group items-center justify-center text-zinc-500 hover:text-black font-inter  transition-all duration-500">Create new account <ArrowRight className="w-5 group-hover:translate-x-1 transition-all duration-500" /> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login2;
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
            <h1 className='font-inter font-semibold text-xl md:text-2xl'>3. Login Form 2</h1>
            <div className='my-5 flex gap-3 font-medium md:text-[14px] text-xs '>
                <button onClick={() => setShowCode(true)} className={`cursor-pointer  ${showCode ? "text-zinc-300" : "text-zinc-500"} `}>Preview</button>
                <button onClick={() => setShowCode(false)} className={`cursor-pointer ${showCode ? "text-zinc-500" : "text-zinc-300"} `}>Code</button>
            </div>
            {showCode ?
                <div className='border border-zinc-700 rounded-xl md:p-10 flex justify-center items-center'>
                    {/* Component  */}
                    <Login2 />
                </div>
                :
                <div className='h-[50vh] hide-scrollbar overflow-y-auto border  border-zinc-500 rounded-xl p-4 '>

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

export default LoginForm2