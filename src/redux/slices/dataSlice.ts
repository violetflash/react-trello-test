import {createAsyncThunk, createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import {
    IAppState,
    ICardInitialProps,
    ICardUpdatingProps,
    IColumn, IComment,
    ICommonProps,
    initialCard
} from "../../types";
import axios from "axios";
import {findItemIndexById, getDataFromLS, writeDataToLS} from "../../utils/functions";


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
            const columnIndex = findItemIndexById(cardData.columnId, data);
            data[columnIndex].cards.push(newCard);
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteCard = createAsyncThunk(
    "dataSlice/deleteCard",
    async (cardData: { columnId: string, cardId: string, }, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            data[columnIndex].cards.splice(cardIndex, 1);
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addNewCardComment = createAsyncThunk(
    "dataSlice/addNewCardComment",
    async (cardData: IComment, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            data[columnIndex].cards[cardIndex].comments.push({
                id: cardData.id,
                cardId: cardData.id,
                columnId: cardData.columnId,
                author: cardData.author,
                text: cardData.text
            });
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const deleteComment = createAsyncThunk(
    "dataSlice/deleteComment",
    async (cardData: { id: string; cardId: string; columnId: string }, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            const commentIndex = findItemIndexById(cardData.id, data[columnIndex].cards[cardIndex].comments)
            data[columnIndex].cards[cardIndex].comments.splice(commentIndex, 1);
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
            const index = findItemIndexById(columnData.id, data);
            data[index].title = columnData.title;
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateCardTitle = createAsyncThunk(
    "dataSlice/updateCardTitle",
    async (cardData: ICardUpdatingProps, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            data[columnIndex].cards[cardIndex].title = cardData.value;
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateCardDescription = createAsyncThunk(
    "dataSlice/updateCardDescription",
    async (cardData: ICardUpdatingProps, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            data[columnIndex].cards[cardIndex].description = cardData.value;
            writeDataToLS(data);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const updateComment = createAsyncThunk(
    "dataSlice/updateComment",
    async (cardData: {id: string; cardId: string; columnId: string; value: string}, thunkAPI) => {
        try {
            const data = getDataFromLS();
            const columnIndex = findItemIndexById(cardData.columnId, data);
            const cardIndex = findItemIndexById(cardData.cardId, data[columnIndex].cards);
            const commentIndex = findItemIndexById(cardData.id, data[columnIndex].cards[cardIndex].comments);
            data[columnIndex].cards[cardIndex].comments[commentIndex].text = cardData.value;
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

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action: PayloadAction<IColumn[]>) => {
                    state.isLoading = false;
                    state.columns = action.payload;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            )
});
