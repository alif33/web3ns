import React from "react"
import Image from "next/image"

const Brands: React.FC = () => {
 
    return (
       <div className="flex items-center py-10">
            <Image
                height={181}
                width={453}
                src="/3Tokens/brands.png"
                alt="Divider between sections"
            />
            {/* <div>
                <Image
                    height={181}
                    width={453}
                    src="/3Tokens/web3foundation.png"
                    alt="Divider between sections"
                />
            </div>
            <div>
                <Image
                    height={98}
                    width={257}
                    src="/3Tokens/Worldcoin.png"
                    alt="Divider between sections"
                />
            </div>
            <div>
                <Image
                    height={20}
                    width={123}
                    src="/3Tokens/stacks.png"
                    alt="Divider between sections"
                />
            </div>  */}
       </div>
    );
}

export default Brands

