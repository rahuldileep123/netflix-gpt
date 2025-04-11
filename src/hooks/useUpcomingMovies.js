import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUpcomingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"




const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
    const getUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await response.json()
        dispatch(setUpcomingMovies(json.results))
    }


    useEffect(() => {
      !upcomingMovies &&  getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies