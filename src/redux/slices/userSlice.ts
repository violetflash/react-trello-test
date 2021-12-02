import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    username: string;

}

const initialState: IUser = {
    username: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        }
    }
});

export const {setUser} = userSlice.actions;