import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService = {
    getAll: ():IRes<IMovies[]> => axiosService.get(urls.movies)
}

export {
    moviesService
}