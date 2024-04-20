import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface User {
  uid: string
  email: string | null
  displayName: string | null
  accessToken: string
}

interface AuthState {
  user: User | ""; // Set the user type to match the payload or null for the initial state
}

const initialState: AuthState = {
  user: "", 
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ uid: string, email: string | null, displayName: string | null, accessToken: string }>) => {
      console.log(action.payload)  
      state.user = action.payload;
      },
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;



export default authSlice.reducer;
