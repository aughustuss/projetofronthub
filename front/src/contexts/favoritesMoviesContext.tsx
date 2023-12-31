import React from "react";
import {
  ChildrenPropsModel,
  FavoritesMoviesContextModel,
} from "models/contexts/ContextModels";
import { MovieModel } from "models/entities/Movie";
export const FavoritesMoviesContext =
  React.createContext<FavoritesMoviesContextModel>({
    movies: [],
    removeMovie: () => {},
    addMovie: () => {},
  });

  const FavoritesMoviesContextProvider: React.FC<ChildrenPropsModel> = ({
    children,
  }) => {
    const [movies, setMovies] = React.useState<MovieModel[]>([]);
    React.useEffect(() => {
      getMovies();
    }, []);
  
    const getMovies = () => {
      const moviesInStorage = localStorage.getItem("userFavoriteMovies");
      if (moviesInStorage) {
        setMovies(JSON.parse(moviesInStorage));
      }
    };
  
    const addMovie = (movie: MovieModel) => {
      setMovies((prevMovies) => {
        const movieExists = prevMovies.some((newMovie) => newMovie.id === movie.id);
  
        if (!movieExists) {
          const newMovies = [...prevMovies, movie];
          localStorage.setItem("userFavoriteMovies", JSON.stringify(newMovies));
          return newMovies;
        }
        return prevMovies;
      })
    };
  
    const removeMovie = (movieId: number) => {
      const movieInFavorites = movies.some((id) => id.id == movieId);
      if (movieInFavorites) {
        const newMoviesList: MovieModel[] = movies.filter((movie) => {
          return movie.id !== movieId;
        });
        setMovies(newMoviesList);
      }
    };
  
    return (
      <FavoritesMoviesContext.Provider
        value={{ movies, addMovie, removeMovie }}
      >
        {children}
      </FavoritesMoviesContext.Provider>
    );
  };
  
  export default FavoritesMoviesContext;
  export { FavoritesMoviesContextProvider };
