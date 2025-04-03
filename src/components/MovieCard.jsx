import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[200px] flex-none mr-3'>
        <img className='w-[200px]' src={IMG_URL + posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard