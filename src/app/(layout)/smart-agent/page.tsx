"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const SmartAgent = ()=>{
    const router = useRouter()

    const freeEdition = ["Standard Smart Agent Interface", "Basic models and data setup", "Standard website template", "Self-service support only"]
    const customAi = ["We know brands", "Custom AI", "Customizable models and data", "Optimized Layout", "Personalized Services"]
    
    return(
        <div className="bg-multi pb-40">
            <div></div>
            <div className="h-screen flex justify-center pt-20 px-20">
                <div>
                    <div>
                        <h2 className="text-4xl font-black text-center">Fully customize your smart agent</h2>
                        <h5 className="text-lg text-center py-3">Description of the tier list will go here, copy should be concise and impactful.</h5>
                    </div>

                    <div className="flex justify-center mt-9 gap-9">
                        {/* Card 1 */}
                        <div className="bg-white max-w-[400px] rounded-xl smart-card px-9 py-9">
                            <h2 className="text-[28px] font-bold">Free Edition</h2>
                            <h4 className="text-base text-[#667085] py-3">Description of the tier list will go here, copy should be concise and impactful.</h4>
                            <hr />
                            <button onClick={()=>router.push("/agent-mission")} className="w-full h-12 text-white font-semibold text-lg bg-gradient-to-r from-custom-purple to-custom-pink my-3 rounded-lg">Use Template</button>
                            <ul>
                                {
                                    freeEdition.map((item, index)=>(
                                        <li className="flex items-center gap-3 mt-2" key={index}>
                                            <div className="flex justify-center items-center h-9 w-9 bg-[#F4EBFF] rounded-lg">
                                                <Image
                                                    height={15}
                                                    width={17}
                                                    src="/base/tick.svg"
                                                    alt="Tick Icon"
                                                />
                                            </div>
                                            <span className="text-base font-medium">{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>                           
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white max-w-[400px] rounded-xl smart-card px-9 py-9">
                            <h2 className="text-[28px] font-bold">Custom AI</h2>
                            <h4 className="text-base text-[#667085] py-3">Description of the tier list will go here, copy should be concise and impactful.</h4>
                            <hr />
                            <button onClick={()=>router.push("/agent-mission")} className="w-full h-12 text-white font-semibold text-lg bg-gradient-to-r from-custom-purple to-custom-pink my-3 rounded-lg">Contact Us</button>
                            <ul>
                                {
                                    customAi.map((item, index)=>(
                                        <li className="flex items-center gap-3 mt-2" key={index}>
                                            <div className="flex justify-center items-center h-9 w-9 bg-[#F4EBFF] rounded-lg">
                                                <Image
                                                    height={15}
                                                    width={17}
                                                    src="/base/tick.svg"
                                                    alt="Tick Icon"
                                                />
                                            </div>
                                            <span className="text-base font-medium">{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>                           
                        </div>






                        {/* <div className="bg-white max-w-[400px] rounded-xl shadow-lg px-9 py-9">
                            <h2 className="text-5xl font-semibold">Custom AI</h2>
                            <h4 className="text-[#667085] py-2">Description of the tier list will go here, copy should be concise and impactful.</h4>
                            <button className="w-full h-10 text-white font-semibold text-lg bg-gradient-to-r from-custom-purple to-custom-pink my-3 rounded-lg">Contact Us</button>
                            <ul>
                                {
                                    customAi.map((item, index)=>(
                                        <li className="flex gap-3 mt-2" key={index}>
                                            <div className="flex justify-center items-center h-9 w-9 bg-[#F4EBFF] rounded-lg">
                                                <Image
                                                    height={15}
                                                    width={17}
                                                    src="/base/tick.svg"
                                                    alt="Tick Icon"
                                                />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>                           
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SmartAgent

                                