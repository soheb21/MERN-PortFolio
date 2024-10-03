import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";

export const loginAsync = createAsyncThunk("/login", async (doc, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/auth/login", doc, {
            withCredentials: true
        });
        if (data.success) {
            localStorage.setItem("token", data.doc)
        }
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return ("Something went wrong")
    }
});

export const getUserAysnc = createAsyncThunk("/get-user", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/auth/get-user");
        return data;

    } catch (e) {
        localStorage.clear();
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message)
        }
        return ("Something went wrong")

    }
})
