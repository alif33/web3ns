import React from "react"
import Image from "next/image"

const ProtocolStack: React.FC = () => {
 
    return (
        <div className="text-white">
            <h2 className="text-center text-4xl">3Token Protocol Stack</h2>
            <h5 className="fira-mono text-center py-4">NOTE: Layer 3 is expect in Q1 2025</h5>
            <div className="flex justify-center">
                <Image
                    width={430}
                    height={787}
                    src="/3Tokens/protocol-stack.png"
                    alt="protocol stack"
                />
            </div>
        </div>
    );
}

export default ProtocolStack