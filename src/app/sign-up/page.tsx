"use client"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-[#f4f4f4] w-full block max-w-8xl mx-auto md:pb-14 px-12 pt-14">
            <div className="flex justify-center items-center">
                <div>
                    <Image src='/image 6.svg' alt="" width={10} height={10} className="w-full shadow-xl" />
                </div>
                <div className="w-[40rem] h-[52rem] bg-[#fff] p-10 shadow-xl">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-end">
                             <h1 className="text-[#c4a77d] text-[8rem] mt-[-3rem] font-black font-fruktur">ụtọ</h1>
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-semibold">Register</h1>
                            <p className="font-fustat font-medium">Welcome to our website, please enter your details;</p>
                            
                        </div>
                        <div className="flex flex-col gap-2 font-fustat">
                                <label htmlFor="">Name</label>
                                <input type="text" placeholder="example@gmail.com" className="w-full h-[3rem] outline-none rounded-md p-2 bg-[#e8dfc9] opcaity-5"/>
                        </div>
                        <div className="flex flex-col gap-2 font-fustat">
                                <label htmlFor="">Email Address</label>
                                <input type="email" placeholder="example@gmail.com" className="w-full h-[3rem] outline-none rounded-md p-2 bg-[#e8dfc9] opcaity-5"/>
                        </div>
                        <div className="flex flex-col gap-2 font-fustat">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="**************" className="w-full h-[3rem] outline-none rounded-md p-2 bg-[#e8dfc9] opcaity-5"/>
                        </div>
                        <div className="flex justify-between font-fustat">
                            <div className="flex gap-1">
                                 <input type="radio" name="" id="" className="w-[1.5rem] outline-none accent-[#e8dfc9]"/>
                                 <p className="text-md text-center mt-[1.5rem]">By creating an account, you agree to the Terms of Use and have read our Privacy Policy</p>
                            </div>
                        </div>
                        <div className="font-fustat">
                            <button className="w-full h-[3rem] bg-[#e8dfc9] text-[#c4a77d] text-xl rounded-md">Sign Up</button>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center font-fustat">
                            <h1 className="text-lg">Don’t Have an Account? <Link href='/sign-up' className="text-[#bf9d78]">Sign Up</Link></h1>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}