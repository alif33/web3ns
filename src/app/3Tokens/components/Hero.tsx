import React from "react"
import Image from "next/image"

const Hero: React.FC = () => {
 
    return (
        <div>
            <div className="flex justify-between py-9 pl-9">
                <div className="text-white mt-28">
                    <h4 className="text-[22px] DM-mono opacity-60">Name Stack for HFT Digital Asset Agents</h4>
                    <div className="py-5">
                        <h1 className="text-6xl">Agent powered <br /> high frequency trading (HFT)</h1>
                    </div>
                    <h5 className="fira-mono opacity-60">Powered by 3Token</h5>
                </div>
                <div>
                    <Image
                        height={457}
                        width={462}
                        src="/3Tokens/hero-circle.png"
                        alt="hero circle"
                    />
                </div>
            </div>
            <div>
                <Image
                    height={190}
                    width={1440}
                    src="/3Tokens/line.svg"
                    alt="line shape"
                />
            </div>
        </div>
    );
}

export default Hero