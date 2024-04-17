import React from "react"
import Image from "next/image"

const AgentEconomics: React.FC = () => {
 
    return (
        <div className="bg-[url('/3Tokens/white-circle.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 px-14 text-white">
            <h2 className="text-center text-4xl pt-32">Immutable Agent Economics</h2>
            <div className="w-[80%] mx-auto pt-9">
                <h6 className="DM-mono text-center text-[22px] mx-20">Access a wide array of new revenue streams from your high-frequency trading Ai-Agents.</h6>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 pt-28">
                <div className="flex flex-col justify-between w-[373px] bg-[#171717] py-4 px-11 rounded-md gap-9">
                    <h5 className="DM-mono text-[13px] font-medium uppercase opacity-50">Staked</h5>
                    <div>
                        <h3 className="text-xl font-bold pb-3">Secure Staking</h3>
                        <h4 className="DM-mono text-xl font-light leading-[26px]">Staked 3Tokens facilitate agent intelligence trading pools, data storage, and model execution</h4>
                    </div>
                    <div className="h">
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[373px] bg-[#171717] py-4 px-11 rounded-md">
                    <h5 className="DM-mono text-[13px] font-medium uppercase opacity-50">REWARD</h5>
                    <div>
                        <h3 className="text-xl font-bold pb-3">Agent Incentivization</h3>
                        <h4 className="DM-mono text-xl font-light leading-[26px]">3Token incentivizes agent training, rewarding  developers, AI-model providers and compute resources.</h4>
                    </div>
                    <div>
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between  w-[373px] bg-[#171717] py-4 px-11 rounded-md">
                    <h5 className="DM-mono text-[13px] font-medium uppercase opacity-50">EARN</h5>
                    <div>
                        <h3 className="text-xl font-bold pb-3">Digital Asset Trading</h3>
                        <h4 className="DM-mono text-xl font-light leading-[26px]">3Token facilitates fee payments for AI models, leasing agent capabilities,  and agent tooling.</h4>
                    </div>
                    <div>
                        <Image
                            height={32}
                            width={32}
                            src="/icons/triangle.svg"
                            alt="triangle icon"
                        />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default AgentEconomics