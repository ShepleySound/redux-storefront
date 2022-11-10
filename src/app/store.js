import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import categoryReducer from '../features/categories/categorySlice';
import productReducer from '../features/products/productSlice';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
