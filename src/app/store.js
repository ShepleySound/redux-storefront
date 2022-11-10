import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import filteringReducer from '../features/filtering/filteringSlice';
import productReducer from '../features/products/productSlice';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    filtering: filteringReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
