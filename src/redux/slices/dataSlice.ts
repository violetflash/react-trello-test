import {createAsyncThunk, createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import {IAppState, ICardInitialProps, IColumn, ICommonProps, initialCard} from "../../types";
import axios from "axios";
import {findColumnIndexById, getDataFromLS, writeDataToLS} from "../../utils/functions";


export const getInitialData = createAsyncThunk(
    "dataSlice/getInitialData",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IColumn[]>('mockData.json');
            writeDataToLS(response.data);
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const setDataFromLS = createAsyncThunk(
    "dataSlice/setDataFromLS",
    async (_, thunkAPI) => {
        try {
            return getDataFromLS();
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addNewCard = createAsyncThunk(
    "dataSlice/addNewCard",
    async (cardData: ICardInitialProps, thunkAPI) => {
        try {
            const newCard = {...initialCard, id: nanoid(), ...cardData};
            const data = getDataFromLS();
            const index = findColumnIndexById(cardData.columnId, data);
            data[index].cards.push(newCard);
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateColumnTitle = createAsyncThunk(
    "dataSlice/updateColumnTitle",
    async (columnData: ICommonProps, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const index = findColumnIndexById(columnData.id, data);
            data[index].title = columnData.title;
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


const initialState: IAppState = {
    columns: [],
    isLoading: false,
    error: null
};

const setError = (state: IAppState, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
};

const setData = (state: IAppState, action: PayloadAction<IColumn[]>) => {
    state.isLoading = false;
    state.columns = action.payload;
};

const setLoading = (state: IAppState) => {
    state.isLoading = true;
}


export const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getInitialData.pending.type]: setLoading,
        [getInitialData.fulfilled.type]: setData,
        [getInitialData.rejected.type]: setError,

        [setDataFromLS.pending.type]: setLoading,
        [setDataFromLS.fulfilled.type]: setData,
        [setDataFromLS.rejected.type]: setError,

        [addNewCard.pending.type]: setLoading,
        [addNewCard.fulfilled.type]: setData,
        [addNewCard.rejected.type]: setError,

        [updateColumnTitle.pending.type]: setLoading,
        [updateColumnTitle.fulfilled.type]: setData,
        [updateColumnTitle.rejected.type]: setError,
    }
});
