
export interface ICommonProps {
    id: string;
    title: string;
}

export interface IComment {
    id: string;
    author: string;
    text: string;
}

export interface ICard extends ICommonProps {
    columnTitle: string;
    description: string;
    comments: IComment[];
}

export interface IColumn extends ICommonProps {
    cards: ICard[];
}

export interface IAppState {
    columns: IColumn[];
    isLoading: boolean;
    error: string | null;
}