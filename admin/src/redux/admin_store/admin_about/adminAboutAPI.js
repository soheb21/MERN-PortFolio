import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";


export const getaboutAsync = createAsyncThunk("/get-about", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/about/get-about');
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})
export const aboutupdateAsync = createAsyncThunk("/about-update", async (updateData, { rejectWithValue }) => {
    const { id, form } = updateData;
    try {
        const { data } = await API.put(`/about/update-about/${id}`, form);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})