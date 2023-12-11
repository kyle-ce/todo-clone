import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface CatFact {
    length: number
    fact: string
  }
export interface CatFacts {
    data: Array<CatFact>
}
  
// Define a service using a base URL and expected endpoints
export const catFactApi = createApi({
    reducerPath: 'catFactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://catfact.ninja' }),
    endpoints: (builder) => ({
      getCatFact: builder.query<CatFact, void>({
        query: ()=> '/fact',
      }),
      getCatFacts: builder.query<CatFacts, number>({
        query: (max)=> `/facts/?limit=${max}`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetCatFactQuery, useGetCatFactsQuery } = catFactApi





