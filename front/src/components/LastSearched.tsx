import React from "react";
import Title from "./Title";
import LastTitleContext from "contexts/LastSearchedTitle";
import Slide from "shared/Slide";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { MovieModel } from "models/entities/Movie";
import { getMoviesBasedOnItsTitleService } from "services/GetMoviesService";
import Movie from "shared/Movie";
import { SwiperSlide } from "swiper/react";
import Loading from "views/Loading";

const LastSearched = () => {
  const { lastSearchedTitle } = React.useContext(LastTitleContext);
  const [similarMovies, setSimiliarMovies] = React.useState<MovieModel[]>([]);
  const [selectedMovie, setSelectedMovie] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
      setIsLoading(true);
      const searchSimilarMovies = async () => {
      Promise.resolve(
        getMoviesBasedOnItsTitleService(lastSearchedTitle)
          .then((response) => {
            setSimiliarMovies(response.data.results);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          })
      );
    };
    const typingTimeout = setTimeout(() => {
      searchSimilarMovies();
    }, 5000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [lastSearchedTitle]);

  const openMovieInfo = (movieId: number) => {
    setSelectedMovie(movieId);
  };

  const closeMovieinfo = () => {
    setSelectedMovie(null);
  };
  return (
    <>
      <section className="flex flex-col gap-y-4 h-[500px]">
        <Title
          bold
          center={false}
          green={false}
          message={`Filmes que são relevantes à sua ultima busca: ${lastSearchedTitle.charAt(0).toUpperCase() + lastSearchedTitle.slice(1)} `}
        />
        <div className="px-4 md:px-[30px] rounded-lg bg-primaryBgBorder">
          {!isLoading ? (
            <Slide scrollBar movies modules={[Navigation, Pagination, Scrollbar]}>
              {similarMovies &&
                similarMovies.slice(0, 9).map((movie: MovieModel) => (
                  <SwiperSlide className="py-10" key={movie.id}>
                    <Movie
                      onGrid={false}
                      movie={movie}
                      openMovieInfo={() => openMovieInfo(movie.id)}
                      closeMovieInfo={closeMovieinfo}
                      selectedMovieId={selectedMovie}
                    />
                  </SwiperSlide>
                ))}
            </Slide>
          ) : (
            <Loading big={false} />
          )}
        </div>
      </section>
    </>
  );
};

export default LastSearched;
