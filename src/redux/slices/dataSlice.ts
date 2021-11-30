import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState, IColumn} from "../../types";
import axios from "axios";

export const getInitialData = createAsyncThunk(
    "dataSlice/getInitialData",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IColumn[]>('mockData.json');
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

const initialState: IAppState = {
    columns: [] as IColumn[],
    isLoading: false,
    error: null
}

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getInitialData.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getInitialData.fulfilled.type]: (state, action: PayloadAction<IColumn[]>) => {
            state.columns = action.payload;
            state.isLoading = false;
        },
        [getInitialData.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    }
})