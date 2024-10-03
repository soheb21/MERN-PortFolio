import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../utils/API";


export const getContactAsync = createAsyncThunk("/get-contact", async (args, { rejectWithValue }) => {
    try {
        const { data } = await API.get('/contact/get-messages');
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})

export const addContactAsync = createAsyncThunk("/send-contact", async (formdata, { rejectWithValue }) => {
    try {
        const { data } = await API.post('/contact/send-messages', formdata);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})

export const contactDeleteAsync = createAsyncThunk("/contact-delete", async (id, { rejectWithValue }) => {
    try {
        const { data } = await API.delete(`/contact/delete-message/${id}`);
        return data;

    } catch (e) {
        if (e.response && e.response.data.message) {
            return rejectWithValue(e.response.data.message);
        }
        return rejectWithValue("Something went wrong!")
    }
})