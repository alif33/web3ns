"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import { addDomainName } from "@/db/queries"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "@/lib/hooks"
import { signInAnonymously } from "firebase/auth"
import { setUserDetails } from "@/lib/slices/userDetailsSlice"
import { auth } from "@/db/firebase"
import PropagateLoader from "react-spinners/PropagateLoader"

const SearchBar = ()=>{
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const userState:any = useSelector(state =>  state.user)
  const { name, email } = useSelector(state => state.userDetails)
    
  const dispatch = useDispatch()

  function isValid(domain:string) {
    domain = domain.trim()

    const rgx = /^(?!-)(?!.*--)[A-Za-z0-9-]+(?<!-)$/
    if (rgx.test(domain)) {
      return true
    }else{
      console.log("Invalid domain")
      return false
    } 
  }
    
  const handleSearch = async()=>{
    setLoading(true)
    if (!isValid(name)) {
      setLoading(false)
      toast('Invalid name. Please check the format.')
    }else{
      try {
        let anonymousUserID = userState.user.uid
        let added = await addDomainName(name, anonymousUserID, email)
        if(added){
          if (userState.isAuth) {
            router.push('/smart-agent')
          }else{
            router.push(`/signup?name=${name}`)
          }
          
        }
      } catch (error) {
          setLoading(false)
          console.log(error)

      }
    }
  }    

  const signIn = async () => {
    
    if(userState && userState.user.uid) return ""
      try {
        await signInAnonymously(auth)
      } catch (error) {
        console.error('Failed to create an anonymous user:', error)
      }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  useEffect(()=>{
    setLoading(false)
  }, [])

  useEffect(()=>{
    if (!userState.isAuth) {        
      signIn();
    }
  }, [])

  return(
    <div className="px-2 w-full flex justify-center">
      <div className="relative search-bar h-[52px] md:h-[60px] w-full md:w-2/5">
        {loading && (
          <div className="absolute top-6 left-24">
            <PropagateLoader color="#3674F9" />
          </div>
        )}
        <input
          id="id-s03"
          type="search"
          name="id-s03"
          placeholder="Search web3 domain"
          aria-label="Search content"
          className="w-full text-sm md:text-base font-medium md:font-semibold h-12 md:h-14 px-2 md:px-4 rounded-full shadow-inner"
          style={{ fontFamily: "Inter, sans-serif", boxShadow: "inset 0 0 5px #777777" }}
          onKeyDown={handleKeyDown}
          onChange={(
            e:ChangeEvent<HTMLInputElement>)=>
              dispatch(setUserDetails({name:e.target.value})
          )}
        />
        <div onClick={handleSearch} className="absolute top-[4px] md:top-[6px] right-1 md:right-2 flex justify-center items-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#2F75FF] shadow-md cursor-pointer">
          <Image
            width={18}
            height={18}
            src="/icons/search.svg"
            alt="search icon"
          />
        </div>
      </div>
    </div>
      
  )
}

export default SearchBar