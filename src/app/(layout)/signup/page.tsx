import Image from "next/image"
import React from "react"

interface SignUpProps {
    searchParams: {
        name: string;
    }
}

const SignUp: React.FC<SignUpProps> = (props)=>{
    console.log();
    
    const freeEdition = ["Standard Smart Agent Interface", "Basic models and data setup", "Standard website template", "Self-service support only"]
    const customAi = ["We know brands", "Custom AI", "Customizable models and data", "Optimized Layout", "Personalized Services"]
    
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
                        <form action="">
                            <div>
                                <label htmlFor="Email">Email</label>
                                <div className="relative border-2 border-[#F2F2F2] rounded-xl">
                                    <input 
                                        id="Email"
                                        type="text"
                                        className="w-full h-12 pl-3 rounded-xl"
                                        placeholder="Enter your email address"
                                    />
                                    {/* <div className="absolute top-2 right-2">
                                        <Image
                                            width={26}
                                            height={26}
                                            src="/base/waving-hand.svg"
                                            alt="Weaving Emoji"
                                        />
                                    </div> */}
                                </div>
                            </div>
                            <div className="flex py-3 gap-7">
                                <h3><span className=" font-semibold">Web3 Agent Name </span>: {props.searchParams.name}</h3>
                                <span>Edit</span>
                            </div>
                            <button className="w-full h-12 bg-gradient-to-r from-custom-purple to-custom-pink text-white font-medium rounded-xl shadow-xl">Continue</button>
                            <div className="mt-5">
                                <p className="text-center text-xs">By selecting Continue, I agree to 3NS’s Terms of Service, Payments Terms of Service, and acknowledge the Privacy Policy.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp
