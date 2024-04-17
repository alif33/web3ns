import React from "react"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
    const socials = [
        { uri: "/icons/twitter.svg", height: 20 , width: 22, alt: "Twitter icon"},
        { uri: "/icons/discord.svg", height: 20 , width: 22, alt: "Discord icon"},
        { uri: "/icons/linkedin.svg", height: 20 , width: 22, alt: "LinkedIn icon"},
        { uri: "/icons/telegram.svg", height: 15 , width: 17, alt: "Telegram icon"},
        { uri: "/icons/facebook.svg", height: 10 , width: 15, alt: "Facebook icon"},
        { uri: "/icons/whatsapp.svg", height: 20 , width: 22, alt: "Whatsapp icon"},
        { uri: "/icons/tiktok.svg", height: 16 , width: 18, alt: "Tiktok icon"},
        { uri: "/icons/youtube.svg", height: 20 , width: 22, alt: "Youtube icon"},
        { uri: "/icons/instagram.svg", height: 20 , width: 22, alt: "Instagram icon"},
    ]
 
    return (
        <div className="text-white px-14">
            {/* FAQ's */}
            <div>
                <div className="w-[700px] mx-auto bg-[url('/3Tokens/faqs.png')] bg-[length:505px_184px] bg-center bg-no-repeat inset-0">
                    <h2 className="text-5xl text-center py-14">Frequently Asked Questions</h2>
                </div>
                <div className="bg-[url('/3Tokens/half-shadow.png')] bg-[length:744px_837px] bg-center bg-no-repeat inset-0 pb-40">
                    <ul>
                        {[1,2,3,4,5,6].map((item, index)=>{
                            return(
                                <li className="pt-14" key={index}>
                                    <div className="flex justify-between">
                                        <h1 className="DM-mono text-2xl">What is 3NS.ai</h1>
                                        <span>
                                            <Image
                                                height={48}
                                                width={48}
                                                src="/icons/arrow-down.svg"
                                                alt="arrow down"
                                            />
                                        </span>
                                    </div>
                                    <hr className="border border-[#ACABAB]" />
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
            </div>
            <hr className="border-2 border-[#D3D3D3]"/>
            {/* Footer */}
            <div className="flex py-9 z-50">
                <div className="basis-7/12">
                    <div className="w-[60%]">
                        <h2 className="font-actor text-4xl">Secure your web3 domain space now <span className="text-[#444444]">before its too late.</span></h2>
                        <Link href="/" className="DM-mono flex justify-center items-center border border-white border-opacity-50 w-[179px] h-11 rounded-md mt-7 gap-3">
                            <span>Contact Us</span>
                            <Image
                                height={12}
                                width={12}
                                src="/icons/right-arrow.svg"
                                alt="Right arrow icon"
                            />
                        </Link>
                    </div>
                </div>
                <div className="basis-5/12">
                    <div className="flex justify-between">
                        <div className="DM-mono">
                            <h3 className="text-[28px] font-medium">Platform</h3>
                            <ul className="flex flex-col gap-5 pt-7">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">Home Stack</Link></li>
                                <li><Link href="/">Search</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="DM-mono text-[28px] font-medium">Community</h3>
                            <div className="grid grid-cols-3 items-center pt-7 gap-2">
                                {
                                    socials.map((item, index)=>(
                                        <Link className="h-10 w-10 flex justify-center items-center bg-[#383D38] rounded-full" key={index} href="/">
                                            <Image
                                                height={item.height}
                                                width={item.width}
                                                src={item.uri}
                                                alt={item.alt}
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <hr className="border-2 border-[#D3D3D3]" />
            <div className="flex justify-between DM-mono py-5">
                <div className="flex gap-9">
                    <h5>All rights reserved.</h5>
                    <h5>Terms</h5>
                    <h5>Privacy</h5>

                </div>
                <div>
                    <h5>Copyright © 2024 3NS.ai</h5>
                </div>
            </div>
    </div>
    );
}

export default Footer