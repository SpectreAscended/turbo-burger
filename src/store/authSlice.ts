import { createSlice } from '@reduxjs/toolkit';

interface InitialAuthState {}

const initialAuthState: InitialAuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
