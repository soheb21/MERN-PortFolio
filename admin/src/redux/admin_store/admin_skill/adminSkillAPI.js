import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";


export const getskillAsync = createAsyncThunk("/get-skill", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/skill/get-skill');
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})
export const skillAddAsync = createAsyncThunk("/skill-add", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await API.post(`/skill/add-skill`, formData, {
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
export const skillUpdateAsync = createAsyncThunk("/skill-update", async (updateData, { rejectWithValue }) => {
    const { id, form } = updateData;
    try {
        const { data } = await API.put(`/skill/update-skill/${id}`, form, {
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
export const skillDeleteAsync = createAsyncThunk("/skill-delete", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete(`/skill/delete-skill/${id}`);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})