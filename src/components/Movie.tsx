import React, {FC} from 'react';
import {IMovie} from "../interfaces";
import {useAppSelector} from "../hooks";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, overview, title, poster_path} = movie
    const {currentPage} = useAppSelector((state) => state.moviesReducer);
    // console.log(currentPage)
    const baseURLPhoto = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <p>{overview}</p>
            <img src="" alt=""/>
            <img src={`${baseURLPhoto}/${poster_path}`} style={{width:'150px'}} alt={title}/>
            <hr/>
        </div>
    );
};

export {Movie};