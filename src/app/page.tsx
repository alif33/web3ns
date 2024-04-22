
'use client'
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LandingPage from '@/components/home';
// import { signInAnonymously } from "firebase/auth";
// import { auth } from '../../firebaseClient';
import { useDispatch, useSelector } from '@/lib/hooks';
// import { setUserDetails } from '@/lib/slices/userDetailsSlice';

const  Home:React.FC = () => {

  const userState:any = useSelector(state =>  state.user.user)
  const {name,email} = useSelector(state => state.userDetails)

  const dispatch = useDispatch();

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
  
  return (
      <LandingPage/>
  );
}

export default Home
