import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

interface InitialAuthState {
  currentUser: string | undefined;
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
    },
    login(state, action) {
      state.uid = action.payload.uid;
      // state.accessToken = action.payload.accessToken;
    },
    setToken(state, action) {
      state.accessToken = action.payload;
    },
    signOut() {
      auth.signOut();
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
