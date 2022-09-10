import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// export interface IHomeState {
//   loading: boolean;
//   error: string | null;
//   value: IHomeStateValue[];
// }
// export const fetchFilms = createAsyncThunk<IHomeStateValue[], undefined>(
//   "home/fetchFilms",
//   async (_, { rejectWithValue }) => {
//     const response = await axios.get(
//       "https://api.themoviedb.org/3/movie/550?api_key=53157666186b4a1196d3899b3ea17ee1"
//     );
//     if (!response.data) {
//       return rejectWithValue("server error!");
//     }

//     const data = await response.data;
//     return data;
//   }
// );

// const initialState: IHomeState = {
//   loading: false,
//   error: null,
//   value: [
//     {
//       poster_path: "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",
//       adult: false,
//       overview:
//         "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
//       release_date: "2016-10-19",
//       genre_ids: [53, 28, 80, 18, 9648],
//       id: 343611,
//       original_title: "Jack Reacher: Never Go Back",
//       original_language: "en",
//       title: "Jack Reacher: Never Go Back",
//       backdrop_path: "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",
//       popularity: 26.818468,
//       vote_count: 201,
//       video: false,
//       vote_average: 4.19,
//     },
//   ],
// };

// export const HomeSlice = createSlice({
//   name: "HomeSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFilms.pending, (state) => {
//         state.loading = true;
//         state.error = null;
        
//       })
//       .addCase(fetchFilms.fulfilled, (state, action) => {
//         state.value = action.payload;
//         state.loading = false;
//       });
//   },
// });

// export const {} = HomeSlice.actions;

// export default HomeSlice.reducer;
