// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  email: string;
  name: string ;
}

const initialState: UserDetails = {
  email: '',
  name: '',
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<{ email?: string; name?: string }>) {
      state.email = action.payload.email ?? state.email;
      state.name = action.payload.name ?? state.name; 
    },
    clearUserDetails(state) {
      state.email = '';
      state.name = '';
    }
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
