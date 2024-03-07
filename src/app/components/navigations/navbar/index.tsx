import Image from "next/image"

const Navbar = () => {

    const banner = {
        height: '50%',
    }
    return (
        <div>
            <div className="flex flex-row bg-white items-center justify-center cursor-pointer">
                <div className="flex flex-row ml-6">
                    <Image
                        src={'/images/realtor.png'}
                        alt="realtor-logo"
                        width={40}
                        height={10}
                    />
                    <p className="text-black font-serif font-medium text-2xl mr-5">
                        <span className="text-red-700 text-2xl">real</span>
                        tor.com
                    </p>
                </div>
                <div >
                    <ul className="text-sm font-medium flex flex-row items-center bg-white text-black p-4">
                        <li className="mx-2 hover:underline">Buy</li>
                        <li className="mx-2 hover:underline">Sell</li>
                        <li className="mx-2 hover:underline">Rent</li>
                        <li className="mx-2 hover:underline">Mortgage</li>
                        <li className="mx-2 hover:underline">Find Realtors</li>
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
            <div className="bg-local flex flex-col justify-center items-center text-center h-full w-full">
                <Image
                    src={'/images/pexels-evgeny-tchebotarev-2187605.jpg'}
                    alt="home banner"
                    width={1920}
                    height={100}
                    style={banner}
                    className="relative bg-scroll"
                />
                <h1 className="text-white text-6xl font-bold">
                    The #1 site real estate <br />professionals trust*</h1>
            </div>
        </div >
    )
}

export default Navbar