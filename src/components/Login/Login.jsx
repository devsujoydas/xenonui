import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User } from "lucide-react";

const Login = () => {
    const [show, setShow] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (e) => {
        setLoadingSpinner(false)
    };

    return (
        <div className=" bg-white w-[450px] p-5 md:p-8 rounded-xl">
            <div className="h-full flex justify-center items-center">
                <div className=" w-full">
                    <div className="text-black">
                        <div className="flex justify-center items-center">
                            <div className="border w-fit bg-black p-2 rounded-full ">
                                <User className="text-white" />
                            </div>
                        </div>
                        <h1 className="md:text-3xl mt-3 text-center text-2xl md:mb-3 mb-2 font-semibold">Login Now</h1>
                    </div>
                    <form onSubmit={handleSubmit(submitHandler)} className="w-full space-y-3 md:space-y-4">
                        <div>
                            <label className="text-slate-800 text-sm font-medium mb-1 block">Email</label>
                            <input type="email" placeholder="Enter email" {...register("email", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="relative">
                            <label className="text-slate-800 text-sm font-medium mb-1 block ">Password</label>
                            <input type={show ? "text" : "password"} placeholder="Enter password" {...register("password", { required: true })} className="text-slate-800 bg-white border border-slate-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" />
                            <div onClick={() => setShow(!show)} className="text-xl absolute top-9 right-3 cursor-pointer active:scale-95 transition-all">
                                {show ? <Eye className="text-black" /> : <EyeOff className="text-black" />}
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-slate-300 rounded cursor-pointer" />
                                <label htmlFor="remember-me" className="text-black ml-3 text-sm cursor-pointer">Remember me</label>
                            </div>
                            <Link to="" className="text-violet-600 font-semibold text-sm hover:underline ml-1">Forgot Password?</Link>
                        </div>
                        <button type="submit" className={`text-white font-medium ${loadingSpinner ? "bg-blue-700" : "bg-blue-500"} hover:bg-blue-500 w-full py-3 rounded-md cursor-pointer active:scale-95 transition-all flex justify-center items-center gap-5`}>
                            <p className={`${loadingSpinner ? "hidden" : "block"} border-t-2 border-b-2 rounded-full w-6 h-6 animate-spin`} />
                            <p className={`${loadingSpinner ? "block" : "hidden"}`}>Login</p>
                        </button>
                    </form>
                    <div className="flex text-zinc-600 py-2  justify-center items-center">
                        <p> ------------ Or ------------ </p>
                    </div>
                    <button className="flex mb-2 justify-center items-center gap-1 border border-zinc-300 w-full py-1 rounded-md hover:bg-zinc-100 cursor-pointer active:scale-95 transition-all">
                        <img className="w-10 h-10 rounded-full" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <h1 className="text-black font-medium ">Sign in with Google</h1>
                    </button>
                    <p className="text-slate-800 text-sm text-center">Don't have an account? <Link to="" className="text-violet-600 font-semibold hover:underline ml-1">Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
