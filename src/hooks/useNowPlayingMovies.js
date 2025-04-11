import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"




const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await response.json()
        console.log(json.results)
        dispatch(setNowPlayingMovies(json.results))
    }


    useEffect(() => {
      !nowPlayingMovies &&  getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies