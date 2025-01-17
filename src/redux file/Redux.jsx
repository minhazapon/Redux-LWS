


function Redux() {
    return (
        <div className="bg-black p-6 sm:p-10 lg:p-20 rounded-xl">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
                <button className="btn bg-cyan-400 border border-cyan-500  rounded-lg text-sm sm:text-base">
                    Increments
                </button>
                <p className="text-white text-base sm:text-lg">0</p>
                <button className="btn bg-cyan-400 border border-cyan-500  rounded-lg text-sm sm:text-base">
                    Decrements
                </button>
            </div>
        </div>

    )
}

export default Redux
