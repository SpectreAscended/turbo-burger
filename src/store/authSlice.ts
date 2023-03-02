import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

interface InitialAuthState {
  currentUser: string | undefined;
  userName: string | undefined;
  uid: string | undefined;
  accessToken: string | undefined;
  loading: boolean;
}

interface SignupData {
  email: string;
  password: string;
}

const initialAuthState: InitialAuthState = {
  currentUser: undefined,
  userName: undefined,
  uid: undefined,
  accessToken: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    signup(state, action) {
      state.uid = action.payload.uid;
      state.accessToken = action.payload.token;
      state.userName = action.payload.userName;
    },
    login(state, action) {
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
      // state.accessToken = action.payload.accessToken;
    },
    setToken(state, action) {
      state.accessToken = action.payload;
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
