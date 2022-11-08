import { createSlice } from '@reduxjs/toolkit';
// import { selectActive } from '../categories/categorySlice';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    1: {
      id: 1,
      name: 'Macbook Pro',
      description: 'Enter description here',
      price: 10.01,
      inventory: 5,
      category: 'electronics',
    },
    2: {
      id: 2,
      name: 'Boring laptop',
      description: 'Enter description here',
      price: 2.14,
      inventory: 200,
      category: 'electronics',
    },
    3: {
      id: 3,
      name: 'Really Sharp Knife',
      description: 'Enter description here',
      price: 500.24,
      inventory: 2,
      category: 'kitchen',
    },
  },
  reducers: {},
});

const { actions, reducer } = productSlice;

// export const { }

export const selectAllProducts = (state) => state.products;
export const selectProductById = (state, action) =>
  state.products[action.payload];
export const selectProductsByCategory = (state) =>
  Object.values(state.products).filter(
    (product) => product.category === state.categories.activeCategory
  );
export default reducer;
