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
        <div className="bg-blue-950 p-28 rounded-xl">
            <p className="text-center font-serif text-2xl font-bold text-cyan-400">Counter</p>
            <div className=" mt-10 flex justify-center items-center gap-5">
                <div>
                    <button onClick={() => handleInrement()} className="btn bg-blue-950 text-white font-serif">Increment</button>
                </div>
                <p className=" text-cyan-400 ">{isCount}</p>
                <div>
                    <button onClick={() => handleDecrement()} className="btn bg-cyan-500 text-white font-serif">Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default ReactCounter
