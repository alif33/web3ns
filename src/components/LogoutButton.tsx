'use client'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebaseClient'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useDispatch } from '@/lib/hooks';
import { clearUser } from '@/lib/slices/authSlice';

function LogoutButton() {
    const router =  useRouter()
    const dispatch = useDispatch()

   const handleLogoutClick = async () => {
       await signOut(auth);
       router.push('/signup');
       dispatch(clearUser())
       toast("User Signed Out successfully");
   }
  return (
    <>
    <button className='p-2 rounded-md bg-fuchsia-200  ' onClick={() => router.push('/signup')} >SignUp</button>
    <button className='p-2 rounded-md bg-fuchsia-200  ' onClick={handleLogoutClick} >Logout</button>
    </>
  )
}

export default LogoutButton;