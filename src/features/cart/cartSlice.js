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
    removeItem: (state, action) => {
      const productId = action.payload.productId;
      const qty = action.payload.qty || null;

      if (!qty || qty >= state.products[productId]) {
        state.itemCount -= state.products[productId];
        delete state.products[productId];
      } else {
        state.itemCount -= qty;
        state.products[productId] -= qty;
      }
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addItem, removeItem } = actions;

export const selectCount = (state) => state.cart.itemCount;

export default reducer;
