import React from "react";

const VideoTitle = ({ mainMovie }) => {
  const { original_title, overview } = mainMovie;
  return (
    <div className="pt-[15%] px-12 absolute text-white">
      <h1 className="text-5xl font-bold">{original_title}</h1>
      <p className="my-2 py-4 text-lg w-2/3">{overview}</p>
      <div>
        <button className="bg-white text-black py-3 px-6 text-xl hover:bg-opacity-50 rounded font-semibold">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-6 m-2 text-xl bg-opacity-50 rounded font-semibold">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
