"use client"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full block mx-auto md:pb-0">
            <Image src='/image 1.svg' alt="" width={10} height={10} className="w-full h-1/4"/>
            <div className="bg-[#e8dfc9] w-full">
                <div className="w-full block max-w-7xl mx-auto px-4 md:pb-8 pt-14">
                    <div className="flex justify-between"> 
                        <div className="flex justify-center">
                            <h1 className="text-white text-[8rem] font-black font-fruktur ">ụtọ</h1>
                        </div>
                        <div className="flex flex-col gap-4 font-fustat">
                            <div className="flex gap-5">
                                <Link href='/'><Image src='/ri_pinterest-fill.svg' alt="" width={40} height={40} /></Link>
                                <Link href='/'><Image src='/eva_facebook-fill.svg' alt="" width={40} height={40} /></Link>
                                <Link href='/'><Image src='/basil_instagram-solid.svg' alt="" width={40} height={40} /></Link>
                                <Link href='/'><Image src='/prime_twitter.svg' alt="" width={40} height={40} /></Link>
                            </div>
                            <h1 className="text-4xl font-medium">Become A Member</h1>
                            <p className="text-xl w-[45rem] font-light">Nigerian cuisine is a key part of our cultural heritage, with each dish telling a story of tradition and community. A food website dedicated to Nigerian recipes can help preserve these rich flavors by sharing traditional meals, ingredients, and cooking techniques.</p>
                            <div className="flex">
                                <input type="email" placeholder="example@gmail.com" className="w-[17rem] h-[3rem] border-3 border-[#c4a77d] p-2"/>
                                <button className="w-[6rem] h-[3rem] bg-[#c4a77d] text-opacity-50">Sign In</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 font-fustat font-semibold text-2xl justify-center ">
                            <Link href='/'>About Us</Link>
                            <Link href='/'>Contact Us</Link>
                            <Link href='/'>Membership</Link>
                            <Link href='/'>Privacy Policy</Link>
                            <Link href='/'>Privacy Settings</Link>
                        </div>
                        <div className="flex flex-col gap-4 font-fustat font-semibold text-2xl justify-center">
                            <Link href='/'>Chefs</Link>
                            <Link href='/'>Health</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}