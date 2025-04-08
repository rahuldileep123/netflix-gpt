import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: 'config',
    initialState: {
        prefferedLanguage: "en"
    },
    reducers: {
        setPrefferedLanguage: (state, action) => {
            state.prefferedLanguage = action.payload
        }
    }
})

export const {setPrefferedLanguage}=configSlice.actions
export default configSlice.reducer;