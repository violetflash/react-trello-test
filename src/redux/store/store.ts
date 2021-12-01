import {configureStore} from '@reduxjs/toolkit';
import {userSlice, dataSlice} from "../slices";
import {modalCardSlice} from "../slices/modalCardSlice";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [dataSlice.name]: dataSlice.reducer,
        [modalCardSlice.name]: modalCardSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;