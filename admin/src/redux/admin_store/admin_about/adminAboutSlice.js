import { createSlice } from "@reduxjs/toolkit";
import { aboutupdateAsync, getaboutAsync } from "./adminAboutAPI";

let initialState = {
    about: {},
    loading: false,
    message: null,
    error: null

}
const adminAbout = createSlice({
    name: "about",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getaboutAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getaboutAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.about = payload.doc;
                state.message = payload.message;
            })
            .addCase(getaboutAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.about = state.about;
                state.error = payload;
                state.message = state.message
            })
        builder
            .addCase(aboutupdateAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(aboutupdateAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.about = payload.doc;
                state.message = payload.message;
            })
            .addCase(aboutupdateAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.about = state.about;
                state.error = payload;
                state.message = state.message
            })
    }
})
export default adminAbout.reducer;