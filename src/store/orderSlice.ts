import { createSlice } from '@reduxjs/toolkit';

const initialOrderState = {
  items: [],
  cartQuantity: 0,
  totalPrice: 0,
};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialOrderState,
  reducers: {},
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
