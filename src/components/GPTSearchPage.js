import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";
import { bgImage } from "../../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="md:h-auto h-screen object-cover" src={bgImage} alt="netfix-bg-img" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTSearchSuggestions />
      </div>
    </div>
  );
};

export default GPTSearchPage;
