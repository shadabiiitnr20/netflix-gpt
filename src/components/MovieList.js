import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-4">
      <h1 className="text-2xl py-2 font-bold text-red-600">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
