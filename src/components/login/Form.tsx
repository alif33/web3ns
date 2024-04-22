"use client"
import React, { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from "@/lib/hooks"
import { 
    signInWithEmailAndPassword,
    sendPasswordResetEmail 
} from "firebase/auth"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { auth } from "@/db/firebase"
import {onAuthStateChanged, User } from "firebase/auth"
import { RootState } from "@/lib/store"
import {setUser} from "@/lib/cookieHandler"
import { getErrorMessage } from "@/lib/errorHandler"

interface FormProps {}

const Form:React.FC<FormProps> = ()=>{
    const [password, setPassword] = useState<string>("")
    const {name, email} = useSelector((state: RootState) => state.userDetails)    

    const dispatch = useDispatch()
    const router = useRouter()

    const handleForgetPassword = async()=>{
        await sendPasswordResetEmail(auth, email)
        toast('Please check your email')
    }

    const handleLoggIned = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            const loggedIn = await signInWithEmailAndPassword(auth, email, password)
            if (loggedIn) {
                setUser(true)
                console.log(loggedIn);
                
                // router.push("/smart-agent")
            }
        } catch (error) {
            const errMessage = getErrorMessage((error as Error).message)
            console.log((error as Error).message);
            
            toast.error(errMessage)
        }

    }

    return(
        <form onSubmit={handleLoggIned}>
            <div>
                <label htmlFor="Password">Login by entering your password</label>
                <div className="relative border-2 border-[#F2F2F2] rounded-xl">
                    <input 
                        id="Password"
                        type="password"
                        className="w-full h-12 pl-3 rounded-xl"
                        placeholder="Password"
                        value={password}
                        onChange={(
                            e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)
                        }
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
                <h3 onClick={handleForgetPassword} className="font-semibold cursor-pointer">Forgotten Password?</h3>
                {/* <span>Edit</span> */}
            </div>
            <button className="w-full h-12 bg-gradient-to-r from-custom-purple to-custom-pink text-white font-medium rounded-xl shadow-xl">Continue</button>
            <div className="mt-5">
                <p className="text-center text-xs">By selecting Continue, I agree to 3NS’s Terms of Service, Payments Terms of Service, and acknowledge the Privacy Policy.</p>
            </div>
        </form>
    )
}

export default Form