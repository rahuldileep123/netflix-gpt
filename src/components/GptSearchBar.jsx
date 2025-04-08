import React from 'react'
import lang from '../utils/languageConstants'

const GptSearchBar = ({prefLang}) => {
    console.log(prefLang);
    
  return (
    <div className='pt-[8%] flex items-center justify-center'>
        <form action="" className='bg-black w-1/2 grid grid-cols-12 rounded bg-opacity-70'>
            <input type="text" className='m-2 p-2 col-span-9 rounded' placeholder={lang[prefLang].searchPlaceholder}/>
            <button className='m-2 px-4 py-2 bg-red-700 rounded col-span-3 text-white font-bold'>{lang[prefLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar