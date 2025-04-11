import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import geminiAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGptMovies } from "../utils/gptSlice";
const GptSearchBar = ({ prefLang }) => {
  const dispatch= useDispatch()
  const searchText = useRef(null);

  const searchTmdbMovies=async(movie)=>{
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json= await response.json()
    return json.results
  }

  const handleGptSearch = async () => {
    const gptQuery="Act as amovie recomendation sysytem and suggest 5 movie names for the query :" + searchText.current.value + ".result should be comma seperated like the given example.Example result: heat,interstellar,raid,inception,prestige"

    const response = await geminiAI.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: gptQuery,
      })
    
    const gptResult=response.text.split(",")
    const promiseArray= gptResult.map(movie=>searchTmdbMovies(movie))
    const results = await Promise.all(promiseArray);
    dispatch(setGptMovies({movieNames:gptResult,movieResults:results}))
    
  };

  return (
    <div className="pt-[8%] flex items-center justify-center ">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="bg-black md:w-1/2 grid grid-cols-12 rounded bg-opacity-70 mt-[30%] md:mt-0"
      >
        <input
          ref={searchText}
          type="text"
          className="m-2 p-2 col-span-9 rounded"
          placeholder={lang[prefLang].searchPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="m-2 px-4 py-2 bg-red-700 rounded col-span-3 text-white font-bold"
        >
          {lang[prefLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
