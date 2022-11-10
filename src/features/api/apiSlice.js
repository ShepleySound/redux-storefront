import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-js401.herokuapp.com/api/v1',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    getProductByCategory: builder.query({
      query: (category) => `/products?category=${category}`,
    }),
    getCategories: builder.query({
      query: () => `/categories`,
    }),
    makePurchase: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetCategoriesQuery,
} = apiSlice;
