// API KEY live_XoPMmAeRO1qZHC1HQuHuuquA2OvH0TLb1FqgPjY8DApUor0ZPYATwR6FQv0alETm

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface CatImg {
id: string;
width: number;
height: number;
url: string;
breeds: any;
}
export type CatImgList = Array<CatImg>;

// Define a service using a base URL and expected endpoints
export const catImgApi = createApi({
    reducerPath: 'catImgApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/images', prepareHeaders: (headers) => headers.set('x-api-key', 'live_XoPMmAeRO1qZHC1HQuHuuquA2OvH0TLb1FqgPjY8DApUor0ZPYATwR6FQv0alETm')}),
    endpoints: (builder) => ({
      getCatImg: builder.query<CatImgList, void>({
        query: ()=> '/search',
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetCatImgQuery, useLazyGetCatImgQuery } = catImgApi



