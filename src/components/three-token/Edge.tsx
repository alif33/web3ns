import React from "react"
import Image from "next/image"

const Edge: React.FC = () => {
 
    return (
       <div className="flex justify-between text-white pl-20">
            <div className="w-[60%] pt-28">
                <h3 className="DM-mono font-medium text-2xl opacity-60">OUR EDGE: </h3>
                <h2 className="text-4xl py-7">Agent trading for <br /> named digital assets</h2>
                <h5 className="fira-mono text-xl opacity-60">Backed by Polkadot Web3 Foundation</h5>

                <div className="text-[22px] DM-mono pt-7">
                    <p className="font-light">3NS.AI is a paradigm shift in how AI agents can be developed, deployed, and monetized within the context of high-frequency trading (HFT) of digital assets.</p>
                    <p className="py-5 font-light">We’re redefining how individuals and smaller institutions gain access to HFT for digital assets.</p>
                    <p className="font-light">We're the first Substrate for decentralized agents to be backed by Polkadot and funded by their Web3 Foundation, along with Worldcoin (OpenAI) and Stacks (Bitcoin’s leading L2).</p>
                </div>
            </div>
           <div>
                <Image
                    height={838}
                    width={666}
                    src="/3Tokens/edge-circle.png"
                    alt="Divider between sections"
                />
           </div>
        
       </div>
    );
}

export default Edge