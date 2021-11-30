import {configureStore} from '@reduxjs/toolkit';
import {userSlice, dataSlice} from "../slices";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [dataSlice.name]: dataSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;