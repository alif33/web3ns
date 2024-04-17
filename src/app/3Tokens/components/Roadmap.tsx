import React from "react"
import Image from "next/image"

const Roadmap: React.FC = () => {
 
    return (
       <div className="text-white mt-20">
            <div className="bg-[url('/3Tokens/roadmap.png')] bg-[length:970px_76px] bg-center bg-no-repeat inset-0">
                <h1 className="text-5xl text-center pt-14">Roadmap</h1>
            </div>
            <div className="mt-10">
                <Image
                    height={566}
                    width={1466}
                    src="/3Tokens/roadmapXL.svg"
                    alt="Roadmap Image"
                />
            </div>
       </div>
    );
}

export default Roadmap