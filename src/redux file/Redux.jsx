import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./ReduxSlice"

function Redux() {

    const dispatch = useDispatch()

    const { count } = useSelector((state) => state)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div className="bg-black p-6 sm:p-10 lg:p-20 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
                <button onClick={() => handleIncrement} className="btn bg-cyan-400 border border-cyan-500  rounded-lg text-sm sm:text-base">
                    Increments
                </button>
                <p className="text-white text-base sm:text-lg"> {count} </p>
                <button onClick={() => handleDecrement} className="btn bg-cyan-400 border border-cyan-500  rounded-lg text-sm sm:text-base">
                    Decrements
                </button>
            </div>
        </div>
    )
}

export default Redux
