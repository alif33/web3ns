import React from "react"
import Image from "next/image"

const ConnectAccount = ()=> {
    const socials = [
        {uri: "/icons/youtube-con.svg", placeholder: "Enter your youtube posts and profile"},
        {uri: "/icons/linkedin-con.svg", placeholder: "Enter your youtube posts and profile"},
        {uri: "/icons/instagram-con.svg", placeholder: "Enter your youtube posts and profile"},
        {uri: "/icons/twitter-con.svg", placeholder: "Enter your youtube posts and profile"},
    ]
    return(
        <div>
            <div className="max-w-[600px] mx-auto">
                <h2 className="text-center font-black text-4xl">Connect your socials, Web3 and cloud accounts</h2>
                <h5 className="font-medium text-center">Your smart agent can reclaim ownership of your socials, cloud and Web3 data</h5>
            </div>
            <div className="max-w-[450px] mx-auto">
                <div className="flex justify-between items-center">
                    <h1>Add your favorite social posts</h1>
                    <div className="flex justify-center items-center h-12 w-[151px] border border-[#252424] rounded-full px-2 gap-3">
                        <Image
                            width={14}
                            height={14}
                            src="/icons/plus.svg"
                            alt="Plus icon"                        
                        />
                        <span>Add Links</span>
                    </div>
                </div>
                {/* Inputs */}
                <div className="mt-3">
                    <form action="">
                        {
                            socials.map((item, index)=>(
                                <div key={index} className="flex gap-1 mb-2">
                                    <div className="flex justify-center items-center min-h-[72px] min-w-[72px] bg-[#F2F2F2] border border-[rgb(0,0,0,0.2)] rounded-md">
                                        <Image
                                            height={36}
                                            width={36}
                                            src={item.uri}
                                            alt="Youtube icon"
                                        />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder={item.placeholder}
                                        className="bg-[#F2F2F2] border border-[rgb(0,0,0,0.2)] w-full pl-2 rounded-md"
                                    />
                                </div>
                            ))
                        }
                        
                        {/* Second button */}

                        <div className="flex justify-between items-center mt-7">
                            <h1>Add your favorite social posts</h1>
                            <div className="flex justify-center items-center h-12 w-[151px] border border-[#252424] rounded-full px-2 gap-3">
                                <Image
                                    width={14}
                                    height={14}
                                    src="/icons/plus.svg"
                                    alt="Plus icon"                        
                                />
                                <span>Add Links</span>
                            </div>
                        </div>
                        
                        {/* Web3 links */}

                        {
                            socials.map((item, index)=>(
                                <div key={index} className="flex gap-1 mb-2">
                                    <div className="flex justify-center items-center min-h-[72px] min-w-[72px] bg-[#F2F2F2] border border-[rgb(0,0,0,0.2)] rounded-md">
                                        <Image
                                            height={36}
                                            width={36}
                                            src={item.uri}
                                            alt="Youtube icon"
                                        />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder={item.placeholder}
                                        className="bg-[#F2F2F2] border border-[rgb(0,0,0,0.2)] w-full pl-2 rounded-md"
                                    />
                                </div>
                            ))
                        }
                        <div>
                            <button className="w-full h-12 bg-gradient-to-r from-custom-purple to-custom-pink text-white font-medium rounded-xl shadow-xl">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ConnectAccount