import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './uiSlice';
import authSlice from './authSlice';
import orderSlice from './orderSlice';

export const store = configureStore({
  reducer: { ui: uiSlice, auth: authSlice, order: orderSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
