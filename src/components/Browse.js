import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../../hooks/useGetUpcomingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const GPTSearchToggleValue = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  return (
    <div>
      <Header />
      {GPTSearchToggleValue ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
