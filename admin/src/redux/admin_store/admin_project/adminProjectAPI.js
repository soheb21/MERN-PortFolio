import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";


export const getprojectAsync = createAsyncThunk("/get-project", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/project/get-project');
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})

export const getprojectDetailsAsync = createAsyncThunk("/get-projecDetailst", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/project/get-project/details/' + id);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})
export const projectAddAsync = createAsyncThunk("/project-add", async (formData, { rejectWithValue }) => {
    try {
        const { data } = await API.post(`/project/add-project`, formData, {
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
export const projectUpdateAsync = createAsyncThunk("/project-update", async (updateData, { rejectWithValue }) => {
    const { id, form } = updateData;
    try {
        const { data } = await API.put(`/project/update-project/${id}`, form, {
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
export const projectDeleteAsync = createAsyncThunk("/project-delete", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete(`/project/delete-project/${id}`);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})