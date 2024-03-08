'use client'

import Image from "next/image"
import { useRouter } from "next/router"

const Navbar = () => {
    return (
        <div>
            <div className="flex flex-row bg-white items-center justify-center cursor-pointer">
                <div className="flex flex-row ml-6">
                    <Image
                        src={'/images/rdc-logo-default.svg'}
                        alt="realtor-logo"
                        width={140}
                        height={10}
                        className="items-center ml-2"
                    />
                </div>
                <div >
                    <ul className="text-sm font-medium flex flex-row items-center bg-white text-black p-4">
                        <li className="mx-2 hover:underline">Buy</li>
                        <li className="mx-2 hover:underline">Sell</li>
                        <li className="mx-2 hover:underline">Rent</li>
                        <li className="mx-2 hover:underline">Mortgage</li>
                        <li className="mx-2 hover:underline">Find Realtors®</li>
                        <li className="mx-2 hover:underline">My Home</li>
                        <li className="mx-2 hover:underline">News & Insights</li>
                    </ul>
                </div>
                <div className="flex flex-row text-black underline justify-center mx-16 text-sm font-semibold">
                    <p className="tracking-wide mx-7 hover:opacity-70">Manage rentals</p>
                    <p className="tracking-wide hover:opacity-70">Advertise</p>
                </div>
                <div className="flex flex-row text-black text-sm justify-center mx-10 items-center">
                    <p className="opacity-70 hover:underline mr-3 text-center justify-center items-center">Log in</p>
                    <p className="bg-black text-white p-2 rounded-3xl px-5 font-bold">Sign up</p>
                </div>
            </div>
        </div >
    )
}

export default Navbar