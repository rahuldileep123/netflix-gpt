import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { MAIN_BG } from "../utils/constants";
import { useSelector } from 'react-redux';

const GptSearch = () => {
    const lang = useSelector((state) => state.config.prefferedLanguage);
  return (
    <div>
        <div className='absolute -z-10'>
        <img
          className="w-full object-cover"
          src={MAIN_BG}
          alt=""
        />
        </div>
        <GptSearchBar prefLang={lang}/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch