import Image from "next/image"

const Navbar = () => {

    return (
        <div>
            <div className="flex flex-row bg-white items-center justify-center cursor-pointer">
                <div>
                    <Image
                        src={'/images/Realtor-Logo.png'}
                        alt="realtor-logo"
                        width={50}
                        height={50}
                        className=""
                    />
                </div>
                <div >
                    <ul className="flex flex-row items-center bg-white text-black p-3">
                        <div className="flex flex-row hover:underline">
                            <li className="mx-5">Buy</li>
                            <li className="mx-5">Sell</li>
                            <li className="mx-5">Rent</li>
                            <li className="mx-5">Mortgage</li>
                            <li className="mx-5">Find Realtors</li>
                            <li className="mx-5">My Home</li>
                            <li className="mx-5">News & Insights</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <Image
                    src={'/images/pexels-mikhail-nilov-6707631.jpg'}
                    alt="home banner"
                    width={1920}
                    height={1110}
                    className="relative"
                />

            </div>
        </div >
    )
}

export default Navbar