import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./admin_store/auth/authSlice";
import adminHomeSlice from "./admin_store/admin_home/adminHomeSlice"
import adminAboutSlice from "./admin_store/admin_about/adminAboutSlice"
import adminSkillSlice from "./admin_store/admin_skill/adminSkillSlice"
import adminProjectSlice from "./admin_store/admin_project/adminProjectSlice"
import adminContactSlice from "./admin_store/admin_contact/adminContactSlice"
export const store = configureStore({
    reducer: {
        auth: authSlice,
        home: adminHomeSlice,
        about: adminAboutSlice,
        skill: adminSkillSlice,
        project: adminProjectSlice,
        contact: adminContactSlice
    }
})