import React from "react"
import Image from "next/image"

const Features: React.FC = () => {

    return (
        <div className="text-white py-5">
            <div className="bg-[url('/3Tokens/unique.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 mb-14">
                <h1 className="text-5xl text-center py-12">Features</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-12">
                <div className="relative w-[426px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-2 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/icons/figure.png"
                        alt="figure icon"
                    />
                    <h2 className="text-center text-[20px] pb-7 pt-3">Agent Intelligence Pools (AIPs)</h2>
                    <h5 className="text-center opacity-80 DM-mono leading-6"> 3Tokens are used to access specialized pools of resources and intelligence, known as Agent Intelligence Pools. These pools allow for the sharing and leveraging of AI models and trading strategies.</h5>
                </div>
                <div className="relative w-[425px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-2 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/icons/figure.png"
                        alt="figure icon"
                    />
                    <h2 className="text-center pb-7 pt-3">Agent Intelligence Pools (AIPs)</h2>
                    <h5 className="text-center opacity-80 DM-mono leading-6">3Tokens are used to access specialized pools of resources and intelligence, known as Agent Intelligence Pools. These pools allow for the sharing and leveraging of AI models and trading strategies.</h5>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-12">
                <div className="relative w-[279px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-2 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/icons/figure.png"
                        alt="figure icon"
                    />
                    <h2 className="text-center pb-7 pt-3">Agent fuel</h2>
                    <h5 className="text-center opacity-80 DM-mono leading-6">3Tokens are vital for advancing AI-Agent intelligence, providing access to curated datasets and computational resources essential for training.</h5>
                </div>
                <div className="relative w-[320px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-2 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/icons/figure.png"
                        alt="figure icon"
                    />
                    <h2 className="text-center pb-7 pt-3">Agent Tools marketplace</h2>
                    <h5 className="text-center opacity-80 DM-mono leading-6">3Token facilitates access to a model tools marketplace, accelerating AI-agent development and enhancing capabilities.</h5>
                </div>
                <div className="relative w-[333px] h-[284px]">
                    <Image
                        height={64}
                        width={64}
                        className="absolute -top-2 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
                        src="/icons/figure.png"
                        alt="figure icon"
                    />
                    <h2 className="text-center pb-7 pt-3">Agent Tasking</h2>
                    <h5 className="text-center opacity-80 DM-mono leading-6">3Tokens are awarded as bounties for specific tasks such as Reinforcement Learning with Human Feedback (RLHF), bug bounties, to boost an agent's reputation and trust in the high-frequency trading environment.</h5>
                </div>
            </div>
        </div>
    );
}

export default Features