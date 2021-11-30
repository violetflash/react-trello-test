import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    username: string;
    isLoggedIn: boolean;
}

const initialState: IUser = {
    username: "",
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.isLoggedIn = true;
        }
    }

});

export const {setUser} = userSlice.actions;