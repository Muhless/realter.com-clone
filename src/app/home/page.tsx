'use client'

import { useState } from "react"

const Cihuy = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <div className="text-center text-5xl">
            <button onClick={handleClick} className="bg-blue-300 p-5 rounded-3xl text-white mt-6">click me <br />{count}</button>
        </div>
    )
}

export default Cihuy