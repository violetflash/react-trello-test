import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IAlertData {
    onConfirm: () => void;
    onClose: () => void;
    text: string;
    description?: string;
    declineText: string;
    confirmText: string;
}

interface IAlertModal {
    isOpened: boolean;
    alertData: IAlertData;
}

const initialState: IAlertModal = {
    isOpened: false,
    alertData: {} as IAlertData
}

export const modalAlertSlice = createSlice({
    name: 'modalAlert',
    initialState,
    reducers: {
        openAlert: (state, action: PayloadAction<IAlertData>) => {
            state.isOpened = true;
            state.alertData = action.payload;
        },
        closeAlert: () => initialState
    }
});

export const {openAlert, closeAlert} = modalAlertSlice.actions;
