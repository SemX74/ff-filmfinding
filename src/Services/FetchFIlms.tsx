import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilm, FilmList, Genres, FilmDescription, } from "./Interfaces/Interfaces";
const KEY = "53157666186b4a1196d3899b3ea17ee1";

// Define a service using a base URL and expected endpoints
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getAllGenres: builder.query<Genres, string>({
      query: () => `genre/movie/list?api_key=${KEY}`,
    }),
    getPopularFilms: builder.query<FilmList, string>({
      query: () => `movie/popular?api_key=${KEY}&page=1`,
    }),
    getTopRatedFilms: builder.query<FilmList, string>({
      query: () => `movie/top_rated?api_key=${KEY}&page=1`,
    }),
    getFilmById: builder.query<FilmDescription, number>({
      query: (id) => `movie/${id}?api_key=${KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllGenresQuery,
  useGetPopularFilmsQuery,
  useGetTopRatedFilmsQuery,
  useGetFilmByIdQuery
} = filmsApi;
