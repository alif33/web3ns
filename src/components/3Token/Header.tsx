import React from "react"
import Image from "next/image"
import Link from "next/link";

const Header: React.FC = () => {
 
    return (
       <div className="flex items-center justify-between px-14 pt-7 text-white">
            <div>
                <Image
                 height={67}
                 width={55}
                 src="/logo.png"
                 alt="site logo"
                />
            </div>
            <div>
                <ul className="fira-mono font-medium flex items-center gap-9">
                    <li><Link className="px-5" href="/">About</Link></li>
                    <li><Link className="px-5" href="/">3Token</Link></li>
                    <li><Link className="px-5" href="/">Name Stack</Link></li>
                    <li><Link className="px-5" href="/">Tokenomics</Link></li>
                    <li><Link className="px-5" href="/">Team</Link></li>
                    <li><Link className="px-5" href="/">Roadmap</Link></li>
                </ul>
            </div>
       </div>
    );
}

export default Header