import HouseContent from "./house/House"

const Content = () => {
    return (
        <div className="flex flex-col mx-32">
            <h1 className="font-black text-xl mt-16 mb-6">
                Browse homes in Los Angeles, CA
            </h1>
            <div className="grid grid-cols-4 items-center">
                <HouseContent />
                <HouseContent />
                <HouseContent />
                <HouseContent />
                <HouseContent />
                <HouseContent />
                <HouseContent />
                <HouseContent />
            </div>
        </div>
    )
}

export default Content