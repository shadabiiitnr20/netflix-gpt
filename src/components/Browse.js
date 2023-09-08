import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../../hooks/useGetUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
