import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICatalog } from '../../types/api';
import { IFormQuery } from '../../types/store';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  // highlight-end
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GOOGLE_API }),
  endpoints: (build) => ({
    getBooks: build.query<ICatalog, IFormQuery>({
      query: (filters) => {
        const query: string =
          filters.category === 'all'
            ? '&q=all'
            : filters.search
            ? `&q=${filters.search}+subject:${filters.category}`
            : `&q=subject:${filters.category}`;
        const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;

        const url = `/volumes?orderBy=${filters.order}${query}${key}`;

        return {
          url,
          method: 'GET',
        };
      },
      merge: (currentCahe, newProducts) => {
        currentCahe.items.push(...newProducts.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
