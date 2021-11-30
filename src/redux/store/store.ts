import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "../slices/userSlice";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;