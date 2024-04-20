import React from "react"
import Image from "next/image"
import Form from "@/components/signup/Form"

interface SignUpProps {
    searchParams: {
        name: string;
    }
}

const SignUp: React.FC<SignUpProps> = (props)=>{
    
    return(
        <div className="min-h-screen bg-multi">
            <div></div>
            <div className="h-screen flex justify-center items-center">
                <div className="h-[495px] mx-auto">
                    <h5 className="text-center text-lg font-medium py-3">Log in or Sign up</h5>
                    <h2 className="flex justify-center gap-2">
                        <span className="text-4xl font-black">Welcome to</span>
                        <Image
                            width={26}
                            height={26}
                            src="/base/waving-hand.svg"
                            alt="Weaving Emoji"
                        />
                        <span className="text-4xl font-black">your Web3 name space</span>
                    </h2>
                    <div className="w-[450px] mx-auto mt-12">
                        <Form domainName={props.searchParams.name}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp
