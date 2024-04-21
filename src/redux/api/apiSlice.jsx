import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fantastic-tick-fez.cyclic.app/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories/get-all",
    }),
    getProducts: builder.query({
      query: () => "/products/get-all",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;
