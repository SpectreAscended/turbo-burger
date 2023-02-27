import { createSlice, current } from '@reduxjs/toolkit';

interface OrderState {
  items: {
    id: string;
    price: number;
    quantity: number;
    title: string;
    drinkOption?: string;
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
      console.log(current(state));
    },
    addOneToCart(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity++;
        state.totalPrice = state.totalPrice + item.price;
        state.cartQuantity++;
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

      state.cartQuantity--;
      state.totalPrice = Math.abs(state.totalPrice - existingItem!.price);
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
