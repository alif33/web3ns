import React from "react"
import Form from "@/components/set-password/Form"

const SetPassword: React.FC = ()=>{
    
    return(
        <div className="min-h-screen bg-multi">
            <div></div>
            <div className="h-screen flex justify-center items-center">
                <div className="h-[495px] mx-auto">
                    {/* <h5 className="text-center text-lg font-medium py-3">Log in or Sign up</h5> */}
                    <h2 className="flex justify-center gap-2">
                        <span className="text-4xl font-black">Enter a password</span>
                    </h2>
                    <div className="w-[450px] mx-auto mt-4">
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SetPassword

