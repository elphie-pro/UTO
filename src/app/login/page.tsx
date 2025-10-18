"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-[#f4f4f4] w-full block max-w-8xl mx-auto md:pb-14 px-12 pt-14">
            <div className="flex justify-center items-center">
                <div>
                    <Image src='/image 6.svg' alt="" width={10} height={10} className="w-full" />
                </div>
                <div className="w-[40rem] h-[52rem] bg-[#fff] p-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-end">
                             <h1 className="text-[#c4a77d] text-[8rem] mt-[-3rem] font-black font-fruktur">ụtọ</h1>
                        </div>
                        <div className="">
                            <h1 className="text-4xl font-semibold">Welcome Back</h1>
                            <p className="font-fustat font-medium">Please enter your details.</p>
                            
                        </div>
                        <div className="flex flex-col gap-2 font-fustat">
                                <label htmlFor="">Email Address</label>
                                <input type="text" placeholder="example@gmail.com" className="w-full h-[3rem] outline-none rounded-md p-2 bg-[#e8dfc9] opcaity-5"/>
                        </div>
                        <div className="flex flex-col gap-2 font-fustat">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="**************" className="w-full h-[3rem] outline-none rounded-md p-2 bg-[#e8dfc9] opcaity-5"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                 <input type="radio" name="" id="" className="w-[1rem] outline-none accent-[#e8dfc9]"/>
                                 <p className="text-xl">Remember me</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}