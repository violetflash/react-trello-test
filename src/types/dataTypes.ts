
export interface ICommonProps {
    id: string;
    title: string;
}

export interface IComment {
    id: string;
    author: string;
    text: string;
}

export interface IAddCommentProps {
    id: string;
    cardId: string;
    columnId: string;
    author: string;
    text: string;
}

export interface ICardInitialProps {
    title: string;
    columnId: string;
    author: string;
}

export interface ICardUpdatingProps {
    cardId: string;
    columnId: string;
    value: string;
}

export interface ICard extends ICommonProps {
    author: string;
    columnId: string;
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

export const initialCard: ICard = {
    author: "",
    id: "",
    columnId: "",
    title: "",
    description: "",
    comments: []
}
