import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <div>
                <Image
                    src={'/images/pexels-david-mcbee-1546168.jpg'}
                    alt="home banner"
                    width={1920}
                    height={100}
                    className="relative bg-scroll h-h-111 brightness-50"
                />
            </div>
            <div className="flex flex-col absolute justify-center items-center">
                <div className=" text-white text-font-banner mt-9 font-black pb-0">
                    <h1>
                        The #1 site real estate <br />professionals trust*
                    </h1>
                </div>
                <div className='flex flex-row text-white font-sans font-semibold'>
                    <p className='mx-5'>Buy</p>
                    <p>Rent</p>
                    <p>Sell</p>
                    <p>Pre-approval</p>
                    <p>Just sold</p>
                    <p>Home value</p>
                </div>
            </div>
        </div>
    )
}

export default Banner