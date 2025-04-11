import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer =(movieId)=>{
    const dispatch= useDispatch()
    const trailerVideo= useSelector(store=>store.movies.trailerVideo)

    const getMovieVideo=async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        const data = await response.json()
        const filterData= data.results.filter(video=>video.type=="Trailer")
        const trailer = filterData.length >0 ? filterData[0] : data[0]
        dispatch(setTrailerVideo(trailer))  
    }
    
    useEffect(()=>{
      !trailerVideo &&  getMovieVideo()
    },[])
}
export default useMovieTrailer