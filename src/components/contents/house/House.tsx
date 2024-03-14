'use client'

import Image from "next/image"

const HouseContent = () => {
    const houseImage = ({ src }) => {
        return `/images/houses/${src}`
    }
    return (
        <div>
            <div className="flex flex-row  mx-10 justify-between items-center">
                <p className="font-bold flex items-center text-center">
                    New Listings
                </p>
                <p>1920</p>
            </div>
            <Image
                loader={houseImage}
                src='pexels-binyamin-mellish-1396122.jpg'
                alt=""
                width={1920}
                height={100}
                className="h-52 w-[300px] rounded-xl mb-4 shadow-inner"
            />

        </div>
    )
}

export default HouseContent