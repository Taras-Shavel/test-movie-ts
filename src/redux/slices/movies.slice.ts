import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {moviesService} from "../../services";
import {IMovie, IMovies} from "../../interfaces";

interface IMovieState {
    movies: IMovies[];

}

const initialState: IMovieState= {
    movies: [],


};

const getAll = createAsyncThunk<IMovies[], void>(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll();
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
            state.movies = action.payload

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

