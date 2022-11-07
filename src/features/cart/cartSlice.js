import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: {},
    itemCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { productId, qty } = action.payload;
      if (state.products[productId]) {
        state.products[productId] += qty;
      } else {
        state.products[productId] = qty;
      }
      state.itemCount += qty;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addItem } = actions;

export default reducer;
