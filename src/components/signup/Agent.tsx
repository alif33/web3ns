"use client"
import { useSearchParams } from "next/navigation"
const Agent = ()=>{
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    
    return(
        <h3><span className=" font-semibold">Web3 Agent Name </span>: {name}</h3>
    )
}
export default Agent