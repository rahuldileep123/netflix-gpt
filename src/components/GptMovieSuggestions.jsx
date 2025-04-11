import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
    const {movieNames,gptMovies}=useSelector(store=>store.gpt)
    if(!movieNames) return null
  return (
    <div className='p-4 m-3 bg-black text-white bg-opacity-70'>
       { movieNames?.map((movie,index)=>(<MovieList key={movie} title={movie} movies={gptMovies[index]}/>))}
        </div>
  )
}

export default GptMovieSuggestions