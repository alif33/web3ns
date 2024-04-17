// components/AuthProvider.tsx
'use client'
import { useEffect, ReactNode } from 'react';
import {onAuthStateChanged, User } from 'firebase/auth';
import { setUser } from '@/lib/slices/authSlice';
import {auth} from '../../firebaseClient'
import { useDispatch } from '@/lib/hooks';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
        if(user){
            let userObj = {
                uid: user?.uid,
                email: user?.email,
                displayName: user?.displayName,
                accessToken: user?.refreshToken 
            }
            dispatch(setUser(userObj));
        }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  return <>{children}</>;
};

export default AuthProvider;
