"use client"
import Image from "next/image";
import Link from "next/link";

type trendProps = {
    name: string,
    description: string,
    photo:string
}

export default function Page() {
    const trends:trendProps[] = [
        {
            name: 'My Comfort Food.',
            description: 'My comfort Sunday food in my Nigerian home is a warm wrap of okpa, freshly steamed and soft, with its rich, nutty flavour from Bambara nut flour and a hint of palm oil and pepper...',
            photo: '/image1.svg'
        },
        {
            name: 'Nigerians Top Appeteizer.',
            description: 'A favourite Nigerian appetizer, famously called small chops, is a delicious medley of bite-sized treats served at parties and special gatherings. It usually includes crispy puff-puff, spicy...',
            photo: '/image2.svg'
        },
        {
            name: 'Sizzling Suya & Naija Delights.',
            description: ' Where every bite takes you on a flavorful journey through Nigeria’s vibrant food culture. From the smoky, spice-laden suya skewers sizzling on the grill to the rich, savory stews...',
            photo: '/image3.svg'
        },
        {
            name: 'Pepper Soup Diaries.',
            description: 'Whether you’re craving the soothing warmth of a traditional goat meat pepper soup or the spicy kick of fish pepper soup, we’ve got you covered. Each recipe is infused with rich, arom...',
            photo: '/image4.svg'
        },
    ]
    return (
        <div className="w-full block max-w-7xl mx-auto px-4 md:pb-2 pt-14">
            <div className="flex justify-between">
                <h1 className="text-4xl">Trending Blogs</h1>
                <button><Image src='/teenyicons_right-solid.svg' alt="" width={30} height={10}/></button>
            </div>
            <div className="flex gap-4 pt-8">
                {trends.map((trend) => {
                    return <div key={trend.name} className="w-[40rem] h-full ">
                        <div className="flex flex-col">
                            <Image src={trend.photo} alt="" width={50} height={20} className="w-full"/>
                            <div className="bg-[#e8dfc9] h-full p-4 flex flex-col gap-2">
                                <h1 className="text-xl font-semibold">{trend.name}</h1>
                                <p className="text-sm text-[#5b5c5d] leading-4">{trend.description}</p>
                                <div className="flex justify-end">
                                    <Link href='/' className="flex">
                                        <Image src='/flat-color-icons_reading-ebook.svg' alt="" width={20} height={10}/>
                                        <p>Read More</p> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="flex justify-between pt-[8rem] pb-10">
                <div className="w-[130rem]">
                    <Image src='/image 5.svg' alt="" width={10} height={10} className="w-full"/>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold font-fustat">Nigeria’s Most Beloved Staple</h1>
                    <p className="text-xl">Rice is undeniably Nigeria’s most beloved staple, woven into the fabric of daily life and  celebrations alike. From the festive, vibrant Jollof rice to the comforting fried rice and  the unique, regional varieties like Ofada rice, it’s hard to imagine a Nigerian meal  without it. Whether it’s served at family gatherings, street food stalls, or special  occasions, rice has earned its place at the center of Nigerian dining. It’s versatile, affordable, and deeply satisfying, making it the go-to dish for millions across the  country. In Nigeria, rice isn’t just food—it’s tradition, culture, and a symbol of togetherness.</p>
                </div> 
            </div>
        </div>
    );
}