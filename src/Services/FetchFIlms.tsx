import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IHomeStateValue {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }
// Define a service using a base URL and expected endpoints
export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getFilmsByName: builder.query<IHomeStateValue, string>({
      query: (name) => `Films/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFilmsByNameQuery } = filmsApi