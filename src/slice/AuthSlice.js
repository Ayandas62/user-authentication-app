import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")):null,
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    allUser:localStorage.getItem("allUser") ? JSON.parse(localStorage.getItem("allUser")) : null,
    allReport:localStorage.getItem("allReport") ? JSON.parse(localStorage.getItem("allReport")) : null,
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user = value.payload
        },
        setToken(state,value){
            state.token = value.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        },
        setAllUser(state,value){
            state.allUser = value.payload
        },
        setAllReport(state,value){
            state.allReport = value.payload
        }
    }
})

export const {setUser,setToken,setLoading,setAllUser,setAllReport} = authSlice.actions
export default authSlice.reducer

