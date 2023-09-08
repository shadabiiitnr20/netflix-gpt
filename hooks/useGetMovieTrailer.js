import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants"

const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieTrailer;
