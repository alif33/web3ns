import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getUser, setAuthCredentials } from "@/lib/cookieHandler"

interface User {
  uid: string
  email: string | null
  displayName: string | null
  accessToken: string
}

interface AuthState {
  user: User | "";
  isAuth: boolean // Set the user type to match the payload or null for the initial state
}

const initialState: AuthState = {
  user: "",
  isAuth: getUser()
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ uid: string, email: string | null, displayName: string | null, accessToken: string }>) => {
      state.user = action.payload
      setAuthCredentials(action.payload)
      
    },

    setAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
      state.isAuth = action.payload.isAuth
    },
    
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, clearUser, setAuth } = authSlice.actions;



export default authSlice.reducer;
