import React, { useState, ChangeEvent, useEffect } from "react"
import { addDomainName } from "@/services/firebase-queries/domainQuery-addDomainName.ts"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "@/lib/hooks"
import { signInAnonymously } from "firebase/auth"
import { auth } from "@/db/firebase"

const SearchBar = ()=>{
    const [query, setQuery] = useState<string>("")
    const router = useRouter()
    const userState:any = useSelector(state =>  state.user.user)
    const { name, email } = useSelector(state => state.userDetails)
    
    function isValid(domain:string) {
      domain = domain.trim()

      const rgx = /^(?!-)(?!.*--)[A-Za-z0-9-]+(?<!-)$/;
      if (rgx.test(domain)) {
        return true
      }else{
        console.log("Invalid domain")
        return false
      } 
    }
    
    const handleSearch = async()=>{
      if (!isValid(query)) {
        toast('Invalid name. Please check the format.')
      }else{
        try {
          let anonymousUserID = userState.uid
          let added = await addDomainName(name,anonymousUserID,email);
          if(added){
            router.push(`/signup?name=${query}`)
          }
        } catch (error) {
            console.log(error)
        }
      }
    }    

    const signIn = async () => {
      
      if(userState && userState.uid) return ""
        try {
          await signInAnonymously(auth)
        } catch (error) {
          console.error('Failed to create an anonymous user:', error)
        }
      }

    useEffect(()=>{
      signIn()
    }, [])

    return(
        <div className="relative search-bar w-2/5">
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Search web3 domain"
            aria-label="Search content"
            className="w-full h-14 px-4 rounded-full shadow-inner"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: "600", boxShadow: "inset 0 0 5px #777777" }}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setQuery(e.target.value)}
          />
          <div onClick={handleSearch} className="absolute top-[6px] right-2 flex justify-center items-center w-12 h-12 rounded-full bg-[#2F75FF] shadow-md cursor-pointer">
            <Image
              width={18}
              height={18}
              src="/icons/search.svg"
              alt="search icon"
            />
          </div>
        </div>
    )
}

export default SearchBar