import { createSlice } from "@reduxjs/toolkit";
import { gethome, homeupdate } from "./adminHomeAPI";

let initialState = {
    home: {},
    loading: false,
    error: null,
    message: ""
}
const adminHomeSlice = createSlice({
    name: "home",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(gethome.pending, (state) => {
                state.loading = true;
            })
            .addCase(gethome.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.home = payload.doc;
                state.message = payload.message;

            })
            .addCase(gethome.rejected, (state, { payload }) => {
                state.loading = false;
                state.home = state.home;
                state.message = "";
                state.error = payload
            })
            .addCase(homeupdate.pending, (state) => {
                state.loading = true;
            })
            .addCase(homeupdate.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.home = payload.doc;
                state.message = payload.message;

            })
            .addCase(homeupdate.rejected, (state, { payload }) => {
                state.loading = false;
                state.home = state.home;
                state.message = "";
                state.error = payload
            })
    }
})
export default adminHomeSlice.reducer;