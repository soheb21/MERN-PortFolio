import { createSlice } from "@reduxjs/toolkit";
import { getUserAysnc, loginAsync } from "./authAPI";

let initialState = {
    isAuth: false,
    loading: false,
    message: "",
    user: {},
    error: null
}
const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        clesrAllAuthErrors(state) {
            state.isAuth = state.isAuth;
            state.error = null;
            state.loading = false;
            state.user = state.user;
            state.message = "";
        },
        logout(state) {
            localStorage.clear();
            state.loading = false;
            state.isAuth = false;
            state.user = {};
            state.message = "Logout Successfully";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAsync.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(loginAsync.rejected, (state, { payload }) => {
                state.loading = false;
                state.isAuth = false;
                state.error = payload;

            })
            .addCase(getUserAysnc.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserAysnc.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isAuth = true;
                state.user = payload.doc;
                state.message = payload.message;

            })
            .addCase(getUserAysnc.rejected, (state, { payload }) => {
                state.loading = false;
                state.isAuth = false;
                state.error = payload;

            })

    }
})

export const { clesrAllAuthErrors, logout } = authSlice.actions;
export default authSlice.reducer;