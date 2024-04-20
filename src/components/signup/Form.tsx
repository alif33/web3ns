"use client"
import React from "react"
import Input from "./Input"
import { useSelector } from "@/lib/hooks"
import { 
    AuthError, 
    EmailAuthProvider, 
    signInWithEmailAndPassword 
} from "firebase/auth"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { auth } from "@/db/firebase"
import {onAuthStateChanged, User } from "firebase/auth"

interface FormProps {
    domainName: string
}

const Form:React.FC<FormProps> = ({ domainName })=>{
    const userState = useSelector(state => state.user.user)
    const { name, email } = useSelector(state =>state.userDetails)
    const router = useRouter()

    const handleAccount = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        
        if(regex.test(email)){
            onAuthStateChanged(auth, (user: User | null) => {
                if (user?.isAnonymous) {
                    router.push('/set-password')
                }else{
                    router.push('/login')
                }
            });
        }else{
            toast('Please enter a valid email address')
        }
    }

    return(
        <form onSubmit={handleAccount}>
            <Input/>
            <div className="flex py-3 gap-7">
                <h3><span className=" font-semibold">Web3 Agent Name </span>: {domainName}</h3>
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