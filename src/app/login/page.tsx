"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-[#ededed] w-full block max-w-8xl mx-auto md:pb-14 px-12 pt-14">
            <div className="flex justify-center items-center">
                <div>
                    <Image src='/image 6.svg' alt="" width={10} height={10} className="w-full" />
                </div>
                <div className="w-[40rem] h-[52rem] bg-[#fff]">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-end">
                             <h1 className="text-white text-[8rem] mt-[-3rem] font-black font-fruktur">ụtọ</h1>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}