import {ICard, IColumn} from "../types";
import {LS_TRELLO_DATA_KEY} from "./constants";

export const getDataFromLS = (): IColumn[] => {
    return JSON.parse(localStorage.getItem(LS_TRELLO_DATA_KEY) || "{}");
};

export const writeDataToLS = (data: IColumn[]) => {
    localStorage.setItem(LS_TRELLO_DATA_KEY, JSON.stringify(data));
};

export const findItemIndexById = (id: string, data: IColumn[] | ICard[]) => {
    return data.findIndex(elem => elem.id === id);
};

export const getTitleByColumnId = (id: string, data: IColumn[]) => data.find(col => col.id === id)?.title;
