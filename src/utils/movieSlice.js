import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null
    },
    reducers:{
        setNowPlayingMovies:(state,action)=>{
              state.nowPlayingMovies =action.payload
     },
     setTrailerVideo:(state,action)=>{
        state.trailerVideo = action.payload
        
    }
}
})

export const {setNowPlayingMovies,setTrailerVideo}=movieSlice.actions
export default movieSlice.reducer;