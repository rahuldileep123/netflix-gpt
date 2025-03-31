import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer =(movieId)=>{
    const dispatch= useDispatch()


    const getMovieVideo=async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        const data = await response.json()
        console.log(data);
        const filterData= data.results.filter(video=>video.type=="Trailer")
        const trailer = filterData.length >0 ? filterData[0] : data[0]
        console.log(trailer);
        dispatch(setTrailerVideo(trailer))  
    }
    
    useEffect(()=>{
        getMovieVideo()
    },[])
}
export default useMovieTrailer