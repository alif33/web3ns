import Image from "next/image"
import Link from "next/link"

const Footer = ()=>{
    return(
        <div className="flex text-black h-[60px] items-center justify-between rounded-2xl border border-gradient px-2  gap-1">
           <div className="flex gap-2">
                <div className="flex justify-between items-center gap-3 h-12 w-[186px] border border-gradient px-4">
                    <div>
                        <Image
                            width={23}
                            height={32}
                            src="/chat/hku.png"
                            alt=""
                        />
                    </div>
                    <h3>Get Started</h3>
                    <div>
                        <Image
                            width={15}
                            height={30}
                            src="/chat/down-arrow.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex justify-center bg-white items-center h-12 w-12 border border-gradient rounded-full">
                    <Image
                        width={20}
                        height={20}
                        src="/chat/placeholder.svg"
                        alt=""
                    />
                </div>
           </div>
           <div className="flex justify-between items-center w-full">
                <div>
                    <input
                        className="h-12 w-[400px]"
                        placeholder="What’s in your mind?..."
                    />
                </div>
                <div className="flex justify-center items-center bg-gradient-to-r from-custom-purple to-custom-pink h-12 w-12 rounded-full">
                    <Image
                        width={20}
                        height={20}
                        src="/chat/send.svg"
                        alt=""
                    />
                </div>
           </div>
        </div>
    )
}  
export default Footer