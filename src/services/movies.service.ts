import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService = {
    getAll: (page = 1):IRes<IMovies> => axiosService.get(urls.movies, {params: {page}})
}

export {
    moviesService
}