export interface IAddFormBase {
    onAdd: (value: string) => void;
    placeholder: string;
    buttonText?: string;
}

export interface IAddNewItemButton extends IAddFormBase {
    text: string;
    variant?: "description";
    isDisabled?: boolean;
}