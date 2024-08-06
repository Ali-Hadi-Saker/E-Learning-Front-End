import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[],
    error: null,
    loading: false
}

const classesSlice = createSlice({
    name: "classes",
    initialState,
    reducers:{
        fetchingClasses: (state)=>{
            state.loading = true
        },
        loadClasses: (state, action)=>{
            const {payload} = action
            state.loading = false
            state.list = payload
        },
        errorOccured: (state, action)=>{
            const {payload} = action
            state.loading = false
            state.error = payload
        }
    }
})

export const {fetchingClasses, loadClasses, errorOccured} = classesSlice.actions

export const classesReducer = classesSlice.reducer