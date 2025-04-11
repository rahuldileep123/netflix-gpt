import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null
  return (
    <div className='md:w-[180px] w-[130px] flex-none mr-3'>
        <img className='w-full' src={IMG_URL + posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard