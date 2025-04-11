import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPopularMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"




const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector(store=>store.movies.popularMovies)
    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json = await response.json()
        console.log("popular",json.results)
        dispatch(setPopularMovies(json.results))
    }


    useEffect(() => {
      !popularMovies &&  getPopularMovies()
    }, [])
}

export default usePopularMovies