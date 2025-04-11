import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovies:null
    },
    reducers:{
        setNowPlayingMovies:(state,action)=>{
              state.nowPlayingMovies =action.payload
     },
     setTrailerVideo:(state,action)=>{
        state.trailerVideo = action.payload
        
    },
    setPopularMovies:(state,action)=>{
        state.popularMovies = action.payload
    },
    setUpcomingMovies:(state,action)=>{
        state.upcomingMovies = action.payload
    }
}
})

export const {setNowPlayingMovies,setTrailerVideo,setPopularMovies,setUpcomingMovies}=movieSlice.actions
export default movieSlice.reducer;