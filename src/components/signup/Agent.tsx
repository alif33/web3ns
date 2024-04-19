"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
const Agent = ()=>{
    const [name, setName] = useState<string|null>("")
    const searchParams = useSearchParams()

    useEffect(()=>{
        const _name_ = searchParams.get('name')
        setName(_name_)
    }, [])


    return(
       
    )
}
export default Agent