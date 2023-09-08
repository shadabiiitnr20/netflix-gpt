import React from "react";
import useGetMovieTrailer from "../../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ mainMovie }) => {
  const { id } = mainMovie;
  useGetMovieTrailer(id);
  const mainMovieTrailer = useSelector((store) => store.movies?.mainTrailerVideo);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          mainMovieTrailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
