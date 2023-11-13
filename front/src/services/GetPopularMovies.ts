import axios from "axios"

export const getPopularMoviesService = async () => {
    return await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_THE_MOVIE_DB_API_KEY}`,
            Accept: "application/json"
        }
    })
}