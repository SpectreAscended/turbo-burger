import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

interface InitialAuthState {
  currentUser: string | undefined;
  uid: string | undefined;
  loading: boolean;
}

interface SignupData {
  email: string;
  password: string;
}

const initialAuthState: InitialAuthState = {
  currentUser: undefined,
  uid: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    signup(state, action) {
      auth.createUserWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
    },
    login(state, action) {
      auth.signInWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      );
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
