import React, { useState } from 'react'
import { sendConvo } from '../services/flaskApi';

const Form = ({setLongest}) => {
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendConvo({ body: body })
            .then(res => setLongest(()=>[...res.sentences]))
            .catch(err => console.log(err))
    }
    return (
        <div className={` bg-white max-w-5/6 p-2 sm:p-12 rounded-2xl shadow-xl z-20`}>
            <div>
			    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 cursor-pointer">Create A Conversation</h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                    Find the longest sentences within your conversation!
                </p>
		    </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-6 flex flex-col">
                <label htmlFor="body" className={`mr-4 font-bold inline-block mb-2`}>Conversation</label>
                <textarea
                    className={`form-textarea font-acme`}
                    placeholder="Start Conversation"
                    rows="6"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                >
                </textarea>
                </div>
                <div className="text-center mt-6">
                    <button className={`py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl`}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
