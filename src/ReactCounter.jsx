import { useState } from "react"

function ReactCounter() {

    const [isCount, setCount] = useState(0)

    const handleInrement = () => {
        setCount((plus) => plus + 1)
    }
    const handleDecrement = () => {
        setCount((mainus) => mainus - 1)
    }

    return (
        <div className="bg-blue-950 p-10 md:p-20 lg:p-28 rounded-xl">
            <p className="text-center font-serif text-xl md:text-2xl font-bold text-cyan-400">
                Counter
            </p>
            <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5">
                <div>
                    <button
                        onClick={() => handleInrement()}
                        className="btn bg-blue-950 text-white font-serif px-4 py-2 md:px-6 md:py-3"
                    >
                        Increment
                    </button>
                </div>
                <p className="text-cyan-400 text-lg md:text-xl">
                    {isCount}
                </p>
                <div>
                    <button
                        onClick={() => handleDecrement()}
                        className="btn bg-cyan-500 text-white font-serif px-4 py-2 md:px-6 md:py-3"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ReactCounter
