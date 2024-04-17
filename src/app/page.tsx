
'use client'
// import { addDomainName } from '@/services/firebase-queries/domainQuery-addDomainName.ts';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LandingPage from '@/components/home';
// import { signInAnonymously } from "firebase/auth";
// import { auth } from '../../firebaseClient';
import { useDispatch, useSelector } from '@/lib/hooks';
import { setUserDetails } from '@/lib/slices/userDetailsSlice';

const  Home:React.FC = () => {

  const userState:any = useSelector(state =>  state.user.user)
  const {name,email} = useSelector(state => state.userDetails)

  const dispatch = useDispatch();


  useEffect(() => {
    const signIn = async () => {
    console.log(userState)
    if(userState && userState.uid) return ""
      try {
        // const result = await signInAnonymously(auth);
        // console.log('Anonymous user created successfully:', result.user);
        // const user = result.user
      } catch (error) {
        console.error('Failed to create an anonymous user:', error);
      }
    }
    signIn()
  }, [userState]);
  

  function validateDomainName(domain:any) {
    domain = domain.trim();
  
    // Regular expression for validating the domain name
    const domainRegex = /^(?!-)(?!.*--)[A-Za-z0-9-]+(?<!-)$/;
    if (domainRegex.test(domain)) {
      console.log("Domain is valid.");
      return true;
    } else {
      console.log("Invalid domain. Please check the format.");
      return false;
    }
  }
  
  const handleNameInput = (e:React.ChangeEvent<HTMLInputElement>) => {
     dispatch(setUserDetails({name:e.target.value}))
  }

  // const handleButtonClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
  //   const domainNameValidated:Boolean = validateDomainName(name);

  //   if(!domainNameValidated){
  //     toast('Invalid name. Please check the format.')
  //   }
  //   else{
  //     try {
  //       let anonymousUserID = userState.uid
  //       let added = await addDomainName(name,anonymousUserID,email);
  //       if(added){
  //          router.push('/signup')
  //          console.log('added successfully')
  //       }
  //     } catch (error) {
  //         console.log(error)
  //     }
  //   }
  // }


  return (
    // <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-950">
  
    //   <div className="flex flex-row" >
    //     <input type="text" name="" className="w-1/3 min-w-80 p-2 rounded-lg" value={agentName} onChange={(e) => handleNameInput(e)} id="" placeholder="Secure your Web3 Ai Agent Name " />
    //     <button className=" ml-8  w-28 bg-slate-50  font-bold rounded-xl " onClick={handleButtonClick} >Search</button>

    //   </div>

    // </main>

    <div>
      <LandingPage 
        handleNameInput={handleNameInput} 
        // handleButtonClick={handleButtonClick}
      ></LandingPage>
    </div>
  );
}

export default Home
