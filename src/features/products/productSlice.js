import { createSlice } from '@reduxjs/toolkit';
// import { selectActive } from '../categories/categorySlice';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    1: {
      id: 1,
      name: 'Laptop',
      description: 'Just a regular laptop. Battery sold separately.',
      price: 10.01,
      inventory: 5,
      imageURL:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80',
      category: 'electronics',
    },
    2: {
      id: 2,
      name: 'GameCube',
      description: 'Wait, you can still buy these?',
      price: 2.14,
      inventory: 200,
      imageURL:
        'https://images.unsplash.com/photo-1494666144702-70d86c6cf884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'electronics',
    },
    3: {
      id: 3,
      name: 'Really Sharp Knife',
      description: 'Ouch.',
      price: 500.24,
      inventory: 2,
      imageURL:
        'https://images.unsplash.com/photo-1614362705324-8da11fd16754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      category: 'kitchen',
    },
    4: {
      id: 4,
      name: 'Polaroid Camera',
      description: 'Photography talent not included.',
      price: 341.29,
      inventory: 10,
      imageURL:
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      category: 'electronics',
    },
    5: {
      id: 5,
      name: 'Very Cool Watch',
      description: 'Very cool... We promise.',
      price: 200.54,
      inventory: 21,
      imageURL:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80',
      category: 'electronics',
    },
    6: {
      id: 6,
      name: 'Red Lipstick',
      description: 'Is it worth it? You tell us.',
      price: 0.99,
      inventory: 200,
      imageURL:
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
      category: 'health',
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
