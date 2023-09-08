import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-4 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
