import React from 'react'

const Longest = ({longest}) => {
    return (
        <div className={`max-w-5/6 p-2 sm:p-12 bg-white rounded-2xl shadow-xl z-20`}>
            <div>
			    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 cursor-pointer">Conversation Analysis</h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Your longest sentences are here!
                </p>
		    </div>
            <div className="mb-6 flex flex-col">
                {longest && (
                    longest.map((l, i) => (
                        <p key={i} className={`font-acme`}>{i + 1}: {l}</p>
                    ))
                )}
            </div>
        </div>
    )
}

export default Longest
