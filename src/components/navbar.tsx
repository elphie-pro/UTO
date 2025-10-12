"use client"
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
      <div className="w-full block mx-auto md:pb-2 overflow-hidden">
        <div className="h-[10rem] w-full p-4 bg-cover" style={{ backgroundImage: "url('/screenshot-2025-10-11-1.svg')" }}>
            <div className="w-full block max-w-7xl mx-auto px-4 md:pb-2 overflow-hidden">
                <div className="flex gap-[7rem]">
                    <h1 className="text-white text-[8rem] mt-[-3rem] font-black font-fruktur">ụtọ</h1>
                    <div className="flex">
                        <input type="text" placeholder="Search..." className="w-[40rem] h-[2.5rem] p-2 mt-[5.5rem] rounded-xl opacity-80 bg-white" />
                        <button className=" absolute mt-[6.1rem] ml-[37rem] cursor-pointer"><Image src='/Vector.svg' width={23} height={10} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
            <div className="w-full h-[3.5rem] bg-[#e8dfc9]">
                <div className="w-full block max-w-2xl mx-auto px-4 md:pb-2 overflow-hidden p-3">
                    <div className="flex justify-between">
                        <div>
                            <Link href={'/'} className="text-2xl">Recipies</Link>
                        </div>
                        <div>
                            <Link href={'/'} className="text-2xl">Health</Link>
                        </div>
                        <div>
                            <Link href={'/'} className="text-2xl">Chefs</Link>
                        </div>
                        <div>
                            <Link href={'/'} className="text-2xl">Reviews</Link>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    );
}