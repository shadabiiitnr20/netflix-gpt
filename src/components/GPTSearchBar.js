import React, { useRef } from "react";
import openai from "../../utils/openai";
import language from "../../utils/language";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.preferedLanguage);
  const inputSearchText = useRef(null);

  const handleGPTSearchClick = async () => {
    console.log(inputSearchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      inputSearchText.current.value +
      ".Only give 5 movie names comma separated like the example result given ahead. Example result: Gadar, Sholay, Don, Pathan, Jawan";

    const getGPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(getGPTResults.choices);
  };

  return (
    <div className="pt-[15%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/6 mx-auto left-0 right-0 pl-20 bg-opacity-80 bg-black rounded-lg"
      >
        <input
          ref={inputSearchText}
          type="text"
          placeholder={language[languageKey]?.getSearchPlaceholder}
          className="rounded w-96 py-2 px-4 m-4"
        />
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-700 py-2 px-4 rounded "
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
