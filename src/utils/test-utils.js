import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../features/cart/cartSlice';
import categoryReducer from '../features/filtering/filteringSlice';
import productReducer from '../features/products/productSlice';

export default function renderWithProvider(
  ui,
  {
    store = configureStore({
      reducer: {
        cart: cartReducer,
        products: productReducer,
        categories: categoryReducer,
      },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
