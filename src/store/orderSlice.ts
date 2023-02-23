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
      // console.log(current(state));
    },
    addOneToCart(state, action) {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      console.log(current(item));
      if (item) {
        item.quantity = item.quantity + 1;
        state.totalPrice = state.totalPrice + item.price;
        state.cartQuantity = state.cartQuantity + 1;
      }
    },
    // TODO removeCart function needs to be tested still
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
      state.totalPrice = state.totalPrice - existingItem!.price;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
