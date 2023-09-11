import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICatalog } from '../../types/api';
import { IDataQueries } from '../../types/api';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  // highlight-end
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GOOGLE_API }),
  endpoints: (build) => ({
    getBooks: build.query<ICatalog, IDataQueries>({
      query: (queriesBook) => {
        const query: string =
          queriesBook.category === 'all'
            ? '&q=all'
            : queriesBook.search
            ? `&q=${queriesBook.search}+subject:${queriesBook.category}`
            : `&q=subject:${queriesBook.category}`;

        const maxResult = `&maxResults=30`;
        const startIndex = `&startIndex=${queriesBook.indexForLoads}`;
        const key = `&key=${process.env.REACT_APP_GOOGLE_KEY}`;

        const url = `/volumes?orderBy=${queriesBook.order}${query}${startIndex}${maxResult}${key}`;

        return {
          url,
          method: 'GET',
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCahe, newProducts) => {
        currentCahe.items.push(...newProducts.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        const refetch =
          currentArg?.category !== previousArg?.category ||
          currentArg?.search !== previousArg?.search ||
          currentArg?.order !== previousArg?.order;

        return !refetch;
      },
    }),
  }),
});
