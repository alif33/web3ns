import React from "react"
import Image from "next/image"

function Question() {

    return (    
        <li className="flex justify-end my-3">
            <div className="flex items-center gap-2">
                <div>
                    <Image
                        height={36}
                        width={36}
                        src="/chat/chat-user.png"
                        alt="Chat user"
                    />
                </div>
                <div className="flex bg-[#1D5CFF] h-14 items-center rounded-full py-1 px-2 gap-3">
                    <h1 className="text-white opacity-80">Create a chatbot gpt using python language what will be step for that</h1>
                    <div className="flex items-center justify-center h-10 w-10 bg-white opacity-55 rounded-full cursor-pointer">
                    <Image
                        height={20}
                        width={20}
                        src="/chat/edit.svg"
                        alt="Edit icon"
                    />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Question