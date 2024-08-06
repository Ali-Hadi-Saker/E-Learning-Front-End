import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classes:[],
    error: null,
    loading: false,
    enrolledClasses:[]
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
            state.classes = payload
        },
        loadEnrolledClasses: (state, action)=>{
            const {payload} = action
            state.loading = false
            state.enrolledClasses = payload
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