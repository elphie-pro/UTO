"use client"
import Image from "next/image";

type imageProps = {
    title:string,
    photo:string
}

export default function Page() {
    const images:imageProps[] = [
        {
            title: 'Jollof Rice',
            photo: '/imag.svg'
        },
        {
            title: 'Fried Rice',
            photo: '/imag2.svg'
        },
        {
            title: 'Coconut Rice',
            photo: '/imag3.svg'
        },
        {
            title: 'Ofada Rice',
            photo: '/imag4.svg'
        }
    ]

    return (
        <div className="w-full block max-w-7xl mx-auto px-4 md:pb-8 pt-14">
            <h1 className="text-4xl ">Rice Dishes</h1>
            <div className="flex justify-between pt-8 pb-8">
                {images.map((image) => {
                    return <div key={image.photo}>
                        <Image src={image.photo} alt="" width={10} height={10} className="w-[18rem]"/>
                        <h1 className="text-2xl bg-[#e8dfc9] p-2 rounded-xl mt-[-3.5rem] ml-[5rem] absolute">{image.title}</h1>
                    </div>
                })}
            </div>
            <div className="w-full shadow-md border border-gray-300 rounded-lg">
                <div className="flex">
               <Image src='/imag5.svg' alt="" width={10} height={19} className="w-1/2" /> 
               <div className="flex justify-end">SET</div>
               <div className="flex flex-col gap-4 justify-center items-center align-middle text-left">
                <h1 className="text-4xl">Nigerain Breakfast Ideas</h1>
                <p className="w-[30rem] ml-[2rem]"> From the rich, hearty Akara (fried bean cakes) paired with Pap, to the classic Moi Moi (steamed bean pudding), there's a dish for every mood and taste. Or kickstart your morning with the popular Agege bread with custard, or indulge in Beans and Plantains for a filling, nutritious start.</p>
               </div>
                </div>
            </div>
        </div>
    );
}