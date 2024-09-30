import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";


export const gethome = createAsyncThunk("/get-home", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/home/gethome');
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})
export const homeupdate = createAsyncThunk("/home-update", async (updateData, { rejectWithValue }) => {
    const { id, form } = updateData;
    try {
        const { data } = await API.put(`/home/updatehome/${id}`, form, {
            headers: {

                'Content-Type': 'multipart/form-data'
            },
        });
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})