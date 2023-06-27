import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    userInfo: {},
    userToken: {},
    error: null,
    success: false
}

const { reducer, } = createSlice({
    initialState,
    name: "auth",
    reducers: {},
    extraReducers: {}
})
export default reducer
export { }