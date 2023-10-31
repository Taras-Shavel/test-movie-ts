import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { moviesAction } from "../redux";

const MoviePagination = () => {
    const [, setQuery] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const total_page = useAppSelector(state => state.moviesReducer.total_page);
    const dispatch = useAppDispatch();

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            dispatch(moviesAction.getAll(newPage));
            setCurrentPage(newPage);
            setQuery(prevQuery => ({ ...prevQuery, page: newPage.toString() }));
        }
    };

    const handleNextPage = () => {
        const newPage = currentPage + 1;
        dispatch(moviesAction.getAll(newPage));
        setCurrentPage(newPage);
        setQuery(prevQuery => ({ ...prevQuery, page: newPage.toString() }));
    };

    return (
        <div>
            <button onClick={handlePreviousPage}>prev</button>
            <button onClick={handleNextPage}>next</button>
        </div>
    )
};

export { MoviePagination };
