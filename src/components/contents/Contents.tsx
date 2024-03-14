import HouseContent from "./house/House"

const Content = () => {
    return (
        <div className="w-screen box-border flex flex-col">
            <h1 className="font-bold text-xl justify-center items-center text-center">
                Browse homes in Los Angeles, CA
            </h1>
            <div>
                <HouseContent />
            </div>
        </div>
    )
}

export default Content