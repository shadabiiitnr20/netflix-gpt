import React from "react";
import language from "../../utils/language";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

  const languageKey = useSelector((store) => store.config?.preferedLanguage)

  return (
    <div className="pt-[15%]">
      <form className="w-3/6 mx-auto left-0 right-0 pl-20 bg-opacity-80 bg-black rounded-lg ">
        <input
          type="text"
          placeholder={language[languageKey]?.getSearchPlaceholder}
          className="rounded w-96 py-2 px-4 m-4"
        />
        <button className="bg-red-700 py-2 px-4 rounded ">🔍</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
