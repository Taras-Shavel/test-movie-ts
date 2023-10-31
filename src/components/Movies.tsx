import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { moviesAction, RootState } from '../redux';
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";



const Movies: FC = () => {
    const {movies, currentPage} = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();


    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    useEffect(() => {
        dispatch(moviesAction.getAll(+currentPage));
    }, [dispatch]);

    console.log(movies)
    
    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export { Movies };
