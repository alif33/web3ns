import Image from "next/image"
import Link from "next/link"

const Nav = ()=>{
    return(
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <Image
                height={40}
                width={48}
                src="/chat/active-user.png"
                alt=""
                />
                <h1>Social Promoter</h1>
            </div>
            <Link className="flex justify-center items-center bg-[#1E1E1E] text-white h-10 w-40 rounded-full" href="/">
                <span>Publish Agent</span>
            </Link>
        </div>
    )
}  
export default Nav