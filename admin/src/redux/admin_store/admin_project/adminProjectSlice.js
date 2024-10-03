import { createSlice } from "@reduxjs/toolkit";
import { getprojectAsync, getprojectDetailsAsync, projectAddAsync, projectDeleteAsync, projectUpdateAsync } from "./adminProjectAPI";

let initialState = {
    project: [],
    projectDetails: {},
    loading: false,
    error: null,
    message: ""
}
const adminProjectSlice = createSlice({
    name: "project",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getprojectAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getprojectAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.project = payload.doc;
                state.message = payload.message;
            })
            .addCase(getprojectAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.project = state.project;
                state.message = "";
                state.error = payload
            })
            .addCase(getprojectDetailsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getprojectDetailsAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.projectDetails = payload.doc;
                state.message = payload.message;

            })
            .addCase(getprojectDetailsAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.projectDetails = state.projectDetails;
                state.message = "";
                state.error = payload
            })
            .addCase(projectUpdateAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(projectUpdateAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                let projectIndex = state.project.findIndex((item) => item._id === payload.doc._id)
                state.project[projectIndex] = payload.doc;
                state.message = payload.message;

            })
            .addCase(projectUpdateAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.project = state.project;
                state.message = "";
                state.error = payload
            })
            .addCase(projectAddAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(projectAddAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.project.push(payload.doc);
                state.message = payload.message;

            })
            .addCase(projectAddAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.project = state.project;
                state.message = "";
                state.error = payload
            })
            .addCase(projectDeleteAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(projectDeleteAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                let removeproject = state.project.filter((item) => item._id !== payload.doc)
                state.project = removeproject;
                state.message = payload.message;

            })
            .addCase(projectDeleteAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.project = state.project;
                state.message = "";
                state.error = payload
            })
    }
})
export default adminProjectSlice.reducer;