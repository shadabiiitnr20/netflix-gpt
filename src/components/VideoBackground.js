import React from "react";
import useGetMovieTrailer from "../../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ mainMovie }) => {
  const { id } = mainMovie;
  useGetMovieTrailer(id);
  const mainMovieTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + mainMovieTrailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
