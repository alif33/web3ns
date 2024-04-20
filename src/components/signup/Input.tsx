import React, { ChangeEvent } from "react"
import { useSelector, useDispatch } from "@/lib/hooks"
import { setUserDetails } from "@/lib/slices/userDetailsSlice"

const Input:React.FC = ()=>{
    const { email, name } = useSelector(state =>state.userDetails)
    const dispatch = useDispatch()

    return(
        <div>
            <label htmlFor="Email">Email</label>
            <div className="relative border-2 border-[#F2F2F2] rounded-xl">
                <input 
                    id="Email"
                    type="text"
                    className="w-full h-12 pl-3 rounded-xl"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(
                        e:ChangeEvent<HTMLInputElement>)=>
                          dispatch(setUserDetails({email: e.target.value})
                    )}
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
    )
}

export default Input