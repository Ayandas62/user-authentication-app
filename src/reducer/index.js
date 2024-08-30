import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from '../slice/AuthSlice'

const rootReducer = combineReducers({
    auth:AuthSlice
})

export default rootReducer