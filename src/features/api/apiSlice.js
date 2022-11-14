import { createSelector } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-js401.herokuapp.com/api/v1',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: ['Product'],
    }),
    getProductByCategory: builder.query({
      query: (category) => `/products?category=${category}`,
      providesTags: ['Product'],
    }),
    getCategories: builder.query({
      query: () => `/categories`,
    }),
    editProduct: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: put,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});

export const selectProductById = (id) =>
  apiSlice.endpoints.getProductById.select(id);

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  useGetCategoriesQuery,
  useEditProductMutation,
} = apiSlice;
