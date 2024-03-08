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
                <div className=" text-white text-font-banner mt-9 font-black pb-0 leading-snug">
                    <h1>
                        The #1 site real estate <br />professionals trust*
                    </h1>
                </div>
                <div className='flex flex-row text-white font-sans font-medium mt-9 text-base'>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Buy</p>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Rent</p>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Sell</p>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Pre-approval</p>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Just sold</p>
                    <p className='mx-5 hover:underline decoration-4 underline-offset-10 cursor-pointer'>Home value</p>
                </div>
                <div className='mt-9 flex flex-row text-center items-center'>
                    <input
                        type="text"
                        placeholder='Address, School, City, Zip or Neighborhood'
                        className='h-14 w-100 rounded-full text-lg px-6'>
                    </input>
                    <div>
                        <button className='bg-black'>test</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner