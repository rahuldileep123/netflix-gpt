import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleGptView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        setGptMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload
            state.gptMovies=movieResults
            state.movieNames=movieNames
        }
    }
})

export const {toggleGptView,setGptMovies} =gptSlice.actions
export default gptSlice.reducer;