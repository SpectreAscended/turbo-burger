import { createSlice, current } from '@reduxjs/toolkit';

interface OrderState {
  items: {
    id: string;
    price: number;
    quantity: number;
    title: string;
  }[];

  cartQuantity: number;
  totalPrice: number;
}

const initialOrderState = {
  items: [],
  cartQuantity: 0,
  totalPrice: 0,
} as OrderState;

const orderSlice = createSlice({
  name: 'order',
  initialState: initialOrderState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
      }
      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      state.cartQuantity = state.cartQuantity + newItem.quantity;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
