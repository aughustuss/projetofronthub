import PopularMoviesContext from "contexts/PopularMoviesContext";
import { MovieModel } from "models/entities/Movie";
import React from "react";
import Slide from "shared/Slide";
import { SwiperSlide } from "swiper/react";
import { BsPlayFill, BsPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import UpcomingMoviesContext from "contexts/UpcomingMoviesContext";
import useMediaQuery from "hooks/MediaScreen";
const Home = () => {
  const { movies } = React.useContext(PopularMoviesContext);
  const { upMovies } = React.useContext(UpcomingMoviesContext);
  const isAboveSM = useMediaQuery("(min-width: 400px)");
  return (
    <>
      <main className="pt-[100px] w-full px-4 md:w-[90%] md:px-0 mx-auto flex flex-col lg:flex-row gap-10 min-h-[550px] h-auto">
        <Slide>
          {movies.map((movie: MovieModel) => (
            <SwiperSlide key={movie.id}>
              <div className="relative w-full h-[550px] z-0 bg-none">
                <div className="relative h-[85%] w-full">
                  <img
                    src={`${import.meta.env.VITE_THE_MOVIE_DB_IMG_PATH}${
                      movie.backdrop_path
                    }`}
                    className="object-cover w-full h-full rounded-lg bg-none"
                  />
                  <div className="bg-black absolute inset-0 h-full w-full z-10 opacity-50 rounded-lg" />
                </div>
                {/* Segundo poster */}
                <div className="absolute h-2/3 w-2/3 lg:w-1/3 z-30 left-6 bottom-0 ">
                  <div className="relative h-full w-full">
                    <img
                      src={`${import.meta.env.VITE_THE_MOVIE_DB_IMG_PATH}${
                        movie.poster_path
                      }`}
                      className="rounded-lg object-cover h-full w-full"
                    />
                    <div className="bg-black absolute inset-0 h-full z-10 w-full opacity-25 rounded-lg" />
                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-primaryNeon text-iconSize font-black z-40 hover:bg-primary transition duration-300">
                      <BsPlus />
                    </button>
                  </div>
                </div>
                {/* Titulo e assista ao trailer */}
                <div className="absolute right-1/2 lg:right-1/4 top-16 lg:top-auto lg:bottom-1/3 translate-x-1/2 lg:translate-y-1/2 w-full max-w-[260px] lg:max-w-[200px] xl:max-w-[300px] text-center z-20 flex flex-row items-center h-[60px] gap-x-2">
                  <a className="border-2 border-primaryNeon p-3 rounded-full flex flex-col items-center justify-center text-iconSize hover:bg-primaryNeon cursor-pointer transition duration-300">
                    <BsPlayFill />
                  </a>
                  <div className="flex flex-col gap-y-0 justify-center h-full w-full text-start">
                    <a href={`/movie/${movie.id}`} className="text-primaryNeon font-black text-subTitle xl:text-navTitle font-title p-0 leading-8 ">
                      {movie.original_title}
                    </a>
                    <span className="text-body">Assista o trailer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slide>
        <div className="w-full h-full flex flex-col justify-between gap-y-4">
          <h1 className="text-title font-title font-black text-primaryNeon">
            Novidades
          </h1>
          {!isAboveSM ? (
            <Slide>
                {upMovies.slice(0, 4).map((movie: MovieModel) => (
                  <SwiperSlide className="flex flex-row gap-x-4 h-[110px] p-2 border border-primaryBgBorder rounded-lg hover:bg-primaryBgBorder transition duration-300 cursor-pointer">
                    <img
                      src={`${import.meta.env.VITE_THE_MOVIE_DB_IMG_PATH}${
                        movie.backdrop_path
                      }`}
                      className="w-full h-[100px] object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-y-4 text-body text-bodyColor">
                      <p className="font-title text-subTitle font-black">
                        {movie.original_title}
                      </p>
                      <p className="line-clamp-2 text-body">{movie.overview}...</p>
                      <div className="flex flex-row items-center text-xs gap-x-2">
                        <span className="text-yellow-600">
                          <AiFillStar />
                        </span>
                        <span>
                          {movie.vote_average}/{movie.vote_count}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Slide>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:flex lg:flex-col w-full lg:max-w-[70%]">
              {upMovies.slice(0, 4).map((movie: MovieModel) => (
                <div className="flex flex-row gap-x-4 h-[110px] p-2 border border-primaryBgBorder rounded-lg hover:bg-primaryBgBorder transition duration-300 cursor-pointer">
                  <img
                    src={`${import.meta.env.VITE_THE_MOVIE_DB_IMG_PATH}${
                      movie.poster_path
                    }`}
                    className="w-1/4 h-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-y-4 text-body text-bodyColor">
                    <p className="font-title font-black">
                      {movie.original_title}
                    </p>
                    <p className="line-clamp-1">{movie.overview}...</p>
                    <div className="flex flex-row items-center text-xs gap-x-2">
                      <span className="text-yellow-600">
                        <AiFillStar />
                      </span>
                      <span>
                        {movie.vote_average}/{movie.vote_count}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
