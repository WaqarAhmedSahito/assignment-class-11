"use client"
import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
                Counter
            </h1>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-7xl font-bold text-gray-800">{count}</h1>
                <div className="mt-6 space-x-4">
                    <button
                        className="py-2 px-10 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>

                    <button
                        className="py-2 px-10 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default State
