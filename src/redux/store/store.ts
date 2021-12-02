import {configureStore} from '@reduxjs/toolkit';
import {userSlice, dataSlice, modalCardSlice, modalAlertSlice} from "../slices";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [dataSlice.name]: dataSlice.reducer,
        [modalCardSlice.name]: modalCardSlice.reducer,
        [modalAlertSlice.name]: modalAlertSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;