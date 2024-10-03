import { createSlice } from "@reduxjs/toolkit";
import { getskillAsync, skillAddAsync, skillDeleteAsync, skillUpdateAsync } from "./adminSkillAPI";

let initialState = {
    skill: [],
    loading: false,
    error: null,
    message: ""
}
const adminSkillSlice = createSlice({
    name: "skill",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getskillAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getskillAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.skill = payload.doc;
                state.message = payload.message;

            })
            .addCase(getskillAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.skill = state.skill;
                state.message = "";
                state.error = payload
            })
            .addCase(skillUpdateAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(skillUpdateAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                let skillIndex = state.skill.findIndex((item) => item._id === payload.doc._id)
                state.skill[skillIndex] = payload.doc;
                state.message = payload.message;

            })
            .addCase(skillUpdateAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.skill = state.skill;
                state.message = "";
                state.error = payload
            })
            .addCase(skillAddAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(skillAddAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.skill.push(payload.doc);
                state.message = payload.message;

            })
            .addCase(skillAddAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.skill = state.skill;
                state.message = "";
                state.error = payload
            })
            .addCase(skillDeleteAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(skillDeleteAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                let removeSkill = state.skill.filter((item) => item._id !== payload.doc)
                state.skill = removeSkill;
                state.message = payload.message;

            })
            .addCase(skillDeleteAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.skill = state.skill;
                state.message = "";
                state.error = payload
            })
    }
})
export default adminSkillSlice.reducer;