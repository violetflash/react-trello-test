import {IColumn} from "../types";
import {LS_TRELLO_DATA_KEY} from "./constants";

type ItemType = {
    id: string;
}

export const getDataFromLS = (): IColumn[] => {
    return JSON.parse(localStorage.getItem(LS_TRELLO_DATA_KEY) || "{}");
};

export const writeDataToLS = (data: IColumn[]) => {
    localStorage.setItem(LS_TRELLO_DATA_KEY, JSON.stringify(data));
};

export const findItemIndexById = <TItem extends ItemType>(id: string, data: TItem[]) => {
    return data.findIndex(elem => elem.id === id);
};

export const getTitleByColumnId = (id: string, data: IColumn[]) => data.find(col => col.id === id)?.title;

export const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertItemAtIndex = <TItem>(array: TItem[], item: TItem, index: number) => {
    return [...array.slice(0, index), item, ...array.slice(index)];
};

