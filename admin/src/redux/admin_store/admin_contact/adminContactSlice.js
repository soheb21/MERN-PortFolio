import { createSlice } from "@reduxjs/toolkit";
import { addContactAsync, contactDeleteAsync, getContactAsync } from "./adminContactAPI";

let initialState = {
    contact: [],
    loading: false,
    error: null,
    message: ""
}
const adminContactSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContactAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContactAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.contact = payload.doc;
                state.message = payload.message;

            })
            .addCase(getContactAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.contact = state.contact;
                state.message = "";
                state.error = payload
            })
            .addCase(addContactAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addContactAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.contact.push(payload.doc);
                state.message = payload.message;

            })
            .addCase(addContactAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.contact = state.contact;
                state.message = "";
                state.error = payload
            })
            .addCase(contactDeleteAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(contactDeleteAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                let removecontact = state.contact.filter((item) => item._id !== payload.doc)
                state.contact = removecontact;
                state.message = payload.message;

            })
            .addCase(contactDeleteAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.contact = state.contact;
                state.message = "";
                state.error = payload
            })
    }
})
export default adminContactSlice.reducer;