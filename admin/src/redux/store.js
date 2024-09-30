import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./admin_store/auth/authSlice";
import adminHomeSlice from "./admin_store/admin_home/adminHomeSlice"
export const store = configureStore({
    reducer: {
        auth: authSlice,
        home: adminHomeSlice
    }
})