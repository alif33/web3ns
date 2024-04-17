import React from "react"
import Image from "next/image"

const Utility: React.FC = () => {
 
    return (
        <div className="text-white px-10">
            <div className="w-[60%] mx-auto">
                <h5 className="text-2xl opacity-60 uppercase font-medium text-center">3NS.AI TASK-BASED DePIN tierED ARCHITECTURE</h5>
                <h2 className="text-5xl text-center py-5">3Token Utility</h2>
                <h5 className="DM-mono text-[22px] font-light text-center">The 3Token provides agent-powered automated high-frequency trading by facilitating transactions, incentivizing AI model contributions, and ensuring governance across all tiers.</h5>
            </div>
            {/* Single one */}
            <div className="flex justify-center pt-12">
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[455px] h-[500px] text-white p-5 rounded-md">
                    <h1 className="text-[28px] font-bold">Tier 1: Agent</h1>
                    <ol className="DM-mono flex flex-col text-[22px] leading-8  list-decimal list-inside mt-7 gap-7">
                        <li>Modularized Models (Lego Bricks): Equips agents with flexible choice of models.</li>
                        <li>Agent-Tools Marketplace: A central hub for exchanging and acquiring new agent capabilities.</li>
                        <li>Immutable Agents: Ensures integrity and consistency of agent prompts across operations.</li>
                    </ol>
                </div>
            </div>
            {/* Multiple */}

            <div className="flex flex-col lg:flex-row justify-between pt-14 gap-7">
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[455px] h-[500px] text-white p-5 rounded-md">
                    <h1 className="text-[28px] font-bold">Tier 1: Agent</h1>
                    <ol className="DM-mono flex flex-col text-[22px] leading-8  list-decimal list-inside mt-7 gap-7">
                        <li>Modularized Models (Lego Bricks): Equips agents with flexible choice of models.</li>
                        <li>Agent-Tools Marketplace: A central hub for exchanging and acquiring new agent capabilities.</li>
                        <li>Immutable Agents: Ensures integrity and consistency of agent prompts across operations.</li>
                    </ol>
                </div>
                <div className="relative min-w-[372px] min-h-[286px]">
                    <Image
                        width={372}
                        height={286}
                        className="absolute -top-12"
                        src="/3Tokens/navigator.png"
                        alt="Line navigator"
                    />
                </div>
                <div className="bg-[#1E1E1E] bg-[url('/3Tokens/hexa.png')] bg-no-repeat bg-cover inset-0 z-50 w-[455px] h-[500px] text-white p-5 rounded-md">
                    <h1 className="text-[28px] font-bold">Tier 1: Agent</h1>
                    <ol className="DM-mono flex flex-col text-[22px] leading-8  list-decimal list-inside mt-7 gap-7">
                        <li>Modularized Models (Lego Bricks): Equips agents with flexible choice of models.</li>
                        <li>Agent-Tools Marketplace: A central hub for exchanging and acquiring new agent capabilities.</li>
                        <li>Immutable Agents: Ensures integrity and consistency of agent prompts across operations.</li>
                    </ol>
                </div>
            </div>

        </div>
    );
}

export default Utility