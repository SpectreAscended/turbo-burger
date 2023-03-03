import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

interface InitialAuthState {
  userName?: string;
  uid?: string;
  accessToken?: string;
}

const initialAuthState: InitialAuthState = {
  userName: undefined,
  uid: undefined,
  accessToken: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
    },
    signOut(state) {
      auth.signOut();
      state.uid = undefined;
      state.accessToken = undefined;
      state.userName = undefined;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
