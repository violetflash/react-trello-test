import React, {useState} from 'react';
import {AddCardForm} from "../AddCardForm/AddCardForm";
import {Button} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

export const AddNewCardButton = () => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if (showForm) {
        return <AddCardForm onClose={() => setShowForm(false)}/>
    }

    return (
        <Button
            onClick={() => setShowForm(true)}
            leftIcon={<AddIcon/>}
            colorScheme="blue"
        >
            Добавить карточку
        </Button>
    )
};
