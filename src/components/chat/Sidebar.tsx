import React from "react"
import Link from "next/link"
import Image from "next/image"

function Sidebar() {

    return (    
        <div className="h-full flex-col justify-between w-[312px] border border-[#EFEFEF] rounded-xl p-3">
            <div>
            <div>
                <Image
                height={39}
                width={48}
                src="/logo.png"
                alt="Site Logo"
                />
            </div>
            <h2 className="text-lg font-semibold">Smart Agent Interfaces</h2>
            <div className="pl-3">
                <ul>
                {
                    [0, 1, 2, 3, 4, 5].map((item, index)=>(
                    <li className="my-1" key={index}>
                        {index!==0 && (<hr />)}
                        <Link className="flex pb-2" href="/">
                        <div className="h-10 w-10 rounded-full">
                            <Image
                            height={36}
                            width={36}
                            src="/chat/user.png"
                            alt="chat avatar"
                            />
                        </div>
                        <h4>Phygital Campaign</h4>
                        <span></span>
                        </Link>
                    </li>
                    ))
                }
                </ul>
            </div>
            </div>
            <div>
                <ul>
                {
                    [0, 1].map((item, index)=>(
                    <li className="my-1" key={index}>
                        {index!==0 && (<hr />)}
                        <Link className="flex pb-2" href="/">
                        <div className="h-10 w-10 rounded-full">
                            <Image
                            height={36}
                            width={36}
                            src="/chat/user.png"
                            alt="chat avatar"
                            />
                        </div>
                        <h4>Phygital Campaign</h4>
                        <span></span>
                        </Link>
                    </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar