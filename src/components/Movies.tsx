import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { moviesAction, RootState } from '../redux';


const Movies: FC = () => {
    const {results} = useAppSelector((state: RootState) => state.moviesReducer.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesAction.getAll());
    }, [dispatch]);

    console.log(results)
    return (
        <div>

        </div>
    );
};

export { Movies };
