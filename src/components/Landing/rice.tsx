"use client"
import Image from "next/image";

type imageProps = {
    title:string,
    photo:string
}

type membersProps = {
    name:string,
    photo:string,
    profile:string,
    description:string
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

    const members:membersProps[] = [
        {
            name: 'Jane Doe',
            photo: '/imag6.svg',
            profile: '/Ellipse 1.svg',
            description: 'It was a treat! Smooth, creamy, and just the right sweetness. The texture was perfect—not too thick or runny. It felt like the kind of dessert that’s simple but always hits the spot. Definitely a classic I’ll go back to.'
        },
        {
            name: 'John Doe',
            photo: '/image7.svg',
            profile: '/Ellipse 2.svg',
            description: 'The crust was golden and flaky, and the filling was packed with flavor—perfectly seasoned meat and veggies. It was hearty without being too heavy, and each bite was just the right balance of crispy and savory.'
        },
        {
            name: 'John Dej',
            photo: '/imag7.svg',
            profile: '/Ellipse 3.svg',
            description: 'The banana bread was decent. It was soft and had a good balance of sweetness, though it could’ve had a bit more flavor or spice. Still, a solid, comforting choice for a snack or breakfast.'
        }
    ]

    return (
        <div className="w-full block max-w-7xl mx-auto px-4 md:pb-8 pt-14">
            <h1 className="text-4xl ">Rice Dishes</h1>
            <div className="flex justify-between pt-8 pb-8">
                {images.map((image) => {
                    return <div key={image.photo}>
                        <Image src={image.photo} alt="" width={10} height={10} className="w-[18rem]"/>
                        <h1 className="text-2xl bg-[#e8dfc9] p-2 rounded-xl mt-[-3.5rem] ml-[5rem] absolute font-fustat font-semibold text-[#b59d78]">{image.title}</h1>
                    </div>
                })}
            </div>
            <div className="w-full shadow-xl border border-gray-300 rounded-lg">
                <div className="flex">
               <Image src='/imag5.svg' alt="" width={10} height={19} className="w-1/2" /> 
               {/* <div className="ml-[40rem]"><p className="absolute">SET</p></div> */}
               <div className="flex flex-col gap-4 justify-center-safe items-start ml-[5rem] p-2 font-fustat">
                <h1 className="text-4xl font-semibold">Nigerain Breakfast Ideas</h1>
                <p className="w-[30rem]"> From the rich, hearty Akara (fried bean cakes) paired with Pap, to the classic Moi Moi (steamed bean pudding), there’s a dish for every mood and taste. Or kickstart your morning with the popular Agege bread with custard, or indulge in Beans and Plantains for a filling, nutritious start.</p>
               </div>
                </div>
            </div>
            <div className="pt-12">
                <h1 className="text-4xl">From Our Members</h1>
                <div className="flex gap-4 pt-8">
                    {members.map((member) => {
                        return <div key={member.name} className="w-[40rem]">
                            <div className="flex flex-col">
                                  <Image src={member.photo} alt="" width={10} height={10} className="w-auto"/>
                                  <div className="flex flex-col gap-4 border-1 shadow-xl border-none p-4 h-[16.5rem]">
                                    <div className="flex gap-2 items-center">
                                        <Image src={member.profile} alt="" width={30} height={30} className="rounded-full"/>
                                        <h1 className="text-xl font-fustat">{member.name}</h1>
                                    </div>
                                    <div className="h-[25rem]">
                                        <p className="font-fustat px-9">{member.description}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <label htmlFor="">
                                            <input type="radio" name="" id="" className="absolute peer hidden"/>
                                            <Image src='/typcn_heart.svg' alt="" width={20} height={20} className="w-full h-full opacity-30 transition-all duration-300 group-hover:opacity-60"/>
                                            <Image src='/typcn_heart colored.svg' alt="" width={20} height={20} className="w-full h-full absolute top-0 left-0 opacity-0 peer-checked:opacity-100 transition-all duration-300" style={{filter: "brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(4392%) hue-rotate(340deg) brightness(92%) contrast(106%)"}}/>
                                        </label>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}