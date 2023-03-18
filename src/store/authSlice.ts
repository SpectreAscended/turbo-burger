import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../firebase';

interface InitialAuthState {
  currentUser: { userName?: string; uid?: string; isAuthenticated?: boolean };
}

const initialAuthState: InitialAuthState = {
  currentUser: {
    userName: undefined,
    uid: undefined,
    isAuthenticated: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.currentUser = {
        userName: action.payload.userName,
        uid: action.payload.uid,
        isAuthenticated: action.payload.isAuthenticated,
      };
    },
    signOut(state) {
      auth.signOut();
      state.currentUser = {
        userName: undefined,
        uid: undefined,
        isAuthenticated: false,
      };
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      localStorage.removeItem('user');
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
