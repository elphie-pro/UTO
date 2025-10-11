"use client"
// import Image from "next/image";

export default function Page() {
    return (
      <div className="w-full block max-w-7xl mx-auto px-4 md:pb-2 overflow-hidden">
        <div className="h-[rem] p-4" style={{ backgroundImage: "url('/screenshot-2025-10-11-1.svg')" }}>
        <div className="flex gap-14">
            <h1 className="text-white text-[8rem] mt-[-3rem] font-black font-fruktur">ụtọ</h1>
            <input type="text" placeholder="Search..." className="w-[40rem] h-[2.5rem] p-2 mt-[5.5rem] rounded-xl opacity-80 bg-white" />
        </div>
        </div>
            <p className="font-fustat">Im testing the font</p>
        </div>
    );
}