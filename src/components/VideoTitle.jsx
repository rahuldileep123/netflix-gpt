import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-16 flex justify-start items-center pb-5 w-screen aspect-video absolute z-9 bg-gradient-to-r from-black text-white'>
        <div>
            <h1 className='font-bold text-5xl'>{title}</h1>
            <p className='py-6 text-lg w-1/2'>{overview}</p>
            <div className='flex gap-3'>
                <button className='bg-gray-100 rounded-lg text-black font-bold p-2 px-12 hover:bg-opacity-50'>▶️Play</button>
                <button className='bg-gray-100 rounded-lg text-black font-bold p-2 px-12'>Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle