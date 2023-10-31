import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {IMovie, IMovies} from "../../interfaces";

interface IMovieState {
    movies: IMovie[];
    currentPage: number
    total_page: number

}

const initialState: IMovieState= {
    movies: [],
    currentPage: 1,
    total_page: 500

};

const getAll = createAsyncThunk<IMovies, number>(
    'moviesSlice/getAll',
    async (currentPage, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(currentPage);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results
            state.currentPage = action.payload.page


        });

    },
});


const {reducer: moviesReducer, actions} = slice

const moviesAction = {
    ...actions,
    getAll
}

export {
    moviesAction,
    moviesReducer
}

