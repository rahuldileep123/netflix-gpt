import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='md:px-16 px-7 flex justify-start items-center pb-5 w-screen aspect-video absolute z-9 bg-gradient-to-r from-black text-white'>
        <div>
            <h1 className='font-bold text-xl md:text-5xl'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
            <div className='flex gap-3 mt-2'>
                <button className='bg-gray-100 rounded-lg text-black font-bold py-1 px-5 md:py-2  md:px-12 hover:bg-opacity-50'>▶️Play</button>
                <button className='bg-gray-100 hidden md:inline-block rounded-lg text-black font-bold py-1 px-5 md:py-2 md:px-12'>Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle