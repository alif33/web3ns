import React from "react"
import Image from "next/image"

const RevenueModel: React.FC = () => {
    return (
        <div className="bg-[url('/3Tokens/white-circle.png')] bg-custom-bg bg-no-repeat bg-cover inset-0 px-14 text-white">
            <h5 className="text-center DM-mono text-2xl font-medium pt-20">CRAFTED FOR SUSTAINBLE TOKEN VALUE CREATION</h5>
            <h2 className="text-center text-4xl py-5">Token Revenue Model</h2>
            <div className="w-[80%] mx-auto">
                <h6 className="text-center DM-mono text-[22px] mx-20 leading-9">Users control their data and earn through agent facilitated transactions, while businesses access high-quality, user-consented information. The staked data and commission-based model generates revenue and drives consistent buy pressure for the 3Token (3NS).</h6>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 pt-20">
                <div className="flex flex-col justify-between w-[373px] bg-[#171717] py-7 px-11 rounded-md gap-9">
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

export default RevenueModel