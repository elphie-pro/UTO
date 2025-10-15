"use client"


type imageProps = {
    photo:string
}

export default function Page() {
    const images:imageProps[] = [
        {
            photo: '/imag.svg'
        },
        {
            photo: '/imag2.svg'
        },
        {
            photo: '/imag3.svg'
        },
        {
            photo: '/imag4.svg'
        }
    ]

    return (
        <div className="w-full block max-w-7xl mx-auto px-4 md:pb-2 pt-14">
            <h1 className="text-4xl ">Rice Dishes</h1>
            <div>
                {images.map((image) => {
                    return <div key={image.photo}>
                        
                    </div>
                })}
            </div>
        </div>
    );
}