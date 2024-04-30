"use client"
import React, { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from "@/lib/hooks"
import { 
    AuthError, 
    EmailAuthProvider, 
    signInWithEmailAndPassword 
} from "firebase/auth"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { auth } from "@/db/firebase"
import {linkWithCredential, User } from "firebase/auth"
import { getErrorMessage } from "@/lib/errorHandler"
import { setIsUser } from "@/lib/cookieHandler"
import { setAuth, setUser } from "@/lib/slices/authSlice"


interface FormProps {}

const Form:React.FC<FormProps> = ()=>{
    const [password, setPassword] = useState<string>("")
    const { name, email } = useSelector(state =>state.userDetails)
    const dispatch = useDispatch()
    const router = useRouter()

    const handlePassword = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if (!auth.currentUser || !email) {
            router.push("/signup");
            return;
        }

        try {
            const credential = EmailAuthProvider.credential(email, password)
            const loggedIn = await linkWithCredential(auth?.currentUser, credential)

            if (loggedIn) {
                const user = loggedIn.user
                setIsUser(true)
                dispatch(setUser({
                    uid: user?.uid,
                    email: user?.email,
                    displayName: user?.displayName,
                    accessToken: user?.refreshToken,
                }))
                setAuth({isAuth: true})
                router.push("/checkout")
            }
        } catch (error) {
            const errMessage = getErrorMessage((error as Error).message)
            toast.error(errMessage)
        }
    }

    return(
        <form onSubmit={handlePassword}>
            <div>
                <label htmlFor="Password">Choose a strong password with at least 5 characters</label>
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
                {/* <h3 className="font-semibold">Forgotten Password?</h3> */}
                {/* <span>Edit</span> */}
            </div>
            <button className="w-full h-12 bg-gradient-to-r from-custom-purple to-custom-pink text-white font-medium rounded-xl shadow-xl">Continue</button>
        </form>
    )
}

export default Form