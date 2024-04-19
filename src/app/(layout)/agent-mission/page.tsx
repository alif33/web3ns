import Image from "next/image"
import Link from "next/link"

const AgentMission = ()=>{

    // const 


    return(
        <div className="min-h-screen bg-multi">
            <div></div>
            <div className="h-screen flex items-center justify-center">
                <div>
                    <div>
                        <h2 className="text-4xl font-black text-center">What’s your agent’s mission?</h2>
                        <h5 className="text-lg text-center py-3">Define your agent’s purpose</h5>
                    </div>

                    <div className="flex justify-center items-center mt-5 gap-3">
                        {/* Card 1 */}
                        <Link href="/ai-agent" className="mission-card w-[289px] bg-[#F2F2F2] h-[143px] rounded-2xl px-5 pt-3">
                            <div className="flex justify-center">
                                <Image
                                    height={27}
                                    width={30}
                                    src="/chat/bag.svg"
                                    alt="Bag Icon"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-center py-2">Business</h3>
                            <h5 className="text-sm text-center">How much capable chat.ai to full-fill your needs</h5>
                        </Link>
                        {/* Card 2 */}
                        <Link href="/ai-agent" className="mission-card w-[289px] bg-[#F2F2F2] h-[143px] rounded-2xl px-5 pt-3">
                            <div className="flex justify-center">
                                <Image
                                    height={27}
                                    width={15}
                                    src="/chat/spark.svg"
                                    alt="Bag Icon"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-center py-2">Hustler</h3>
                            <h5 className="text-sm text-center">How much capable chat.ai to full-fill your needs</h5>
                        </Link>
                        {/* Card 3 */}
                        <Link href="/ai-agent" className="mission-card w-[289px] bg-[#F2F2F2] h-[143px] rounded-2xl px-5 pt-3">
                            <div className="flex justify-center">
                                <Image
                                    height={30}
                                    width={30}
                                    src="/chat/man-emoji.svg"
                                    alt="Bag Icon"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-center py-2">Personal</h3>
                            <h5 className="text-sm text-center">How much capable chat.ai to full-fill your needs</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AgentMission