"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full block mx-auto md:pb-0 bg-[#f4f1e7] rounded-b-[4rem]">
            <div className="w-full block max-w-7xl mx-auto px-4 md:pb-0">
                <div className="flex justify-between items-center">
                    <div className=" font-fustat">
                        <h1 className="text-6xl font-bold">Welcome to <span className="text-[#e8dfc9] text-[6rem] font-semibold font-fruktur">ụtọ🍽️,</span> <br /> bringing your childhood to you.</h1>
                    </div>
                    <div>
                        <Image src='/image.svg' alt="" width={10} height={10} className="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}