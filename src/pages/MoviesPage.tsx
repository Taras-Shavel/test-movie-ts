import React from 'react';
import {MoviePagination, Movies} from "../components";

const MoviesPage = () => {
    return (
        <div>
            <MoviePagination/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};