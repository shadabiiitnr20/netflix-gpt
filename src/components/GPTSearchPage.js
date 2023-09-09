import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";
import { bgImage } from "../../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bgImage} alt="netfix-bg-img" />
      </div>
      <GPTSearchBar />
      <GPTSearchSuggestions />
    </div>
  );
};

export default GPTSearchPage;
