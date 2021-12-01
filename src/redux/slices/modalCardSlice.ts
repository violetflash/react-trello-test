import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard} from "../../types";

interface IModalCard {
    isOpened: boolean;
    card: ICard;
}

const initialState: IModalCard = {
    isOpened: false,
    card: {} as ICard,
}

export const modalCardSlice = createSlice({
    name: "modalCard",
    initialState,
    reducers: {
        openCard: (state, action: PayloadAction<ICard>) => {
            state.isOpened = true;
            state.card = action.payload;
        },
        closeCard: (state) => {
            state.isOpened = false;
            state.card = {} as ICard;
        }
    }
});

export const {openCard, closeCard} = modalCardSlice.actions;