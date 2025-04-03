import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    console.log(movies);
    
  return (
    <div className='p-3'>
         <h1 className='py-2 font-bold text-lg text-white'>{title}</h1>
        
           
            <div className='flex overflow-x-scroll scrollbar-hide'>
                {movies?.map(movie=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
                
            </div>
        
    </div>
  )
}

export default MovieList