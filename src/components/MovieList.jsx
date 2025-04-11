import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    
  return (
    <div className='md:p-3 p-4'>
         <h1 className='md:py-2 py-1 font-bold text-lg text-white'>{title}</h1>
        
           
            <div className='flex overflow-x-scroll scrollbar-hide'>
                {movies?.map(movie=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
                
            </div>
        
    </div>
  )
}

export default MovieList