import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetTrailerVideo from "../../hooks/useGetTrailerVideo";
import { useSelector } from "react-redux";
import { logo } from "../../utils/constants";
// import Header from "./Header";

const Trailer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  useGetTrailerVideo(id);

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const navigateHandle = () => {
    navigate("/browse");
  };

  return (
    <div className="bg-black">
      <div className="flex w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
        <img className="w-52" src={logo} alt="netflix-logo" />
        <div className="flex p-2">
          <button
            onClick={navigateHandle}
            className="bg-red-700 rounded text-white m-2 w-24 mt-2 text-sm font-semibold hover:cursor-pointer"
          >
            Back To Browse Page
          </button>
        </div>
      </div>

      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Trailer;
