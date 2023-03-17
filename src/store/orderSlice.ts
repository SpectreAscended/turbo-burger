import { createSlice, current } from '@reduxjs/toolkit';

interface OrderState {
  items: {
    id: string;
    price: number;
    quantity: number;
    title: string;
    drinkOption?: string;
  }[];

  totalPrice: number;
}

const initialOrderState: OrderState = {
  items: [],
  totalPrice: 0,
};

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
      // console.log(current(state));
    },
    addOneToCart(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity++;
        state.totalPrice = state.totalPrice + item.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItem!.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        state.items[existingItemIndex].quantity--;
      }

      state.totalPrice = Math.abs(state.totalPrice - existingItem!.price);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
