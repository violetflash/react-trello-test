import React, {useState} from 'react';
import {Button} from "@chakra-ui/react";
import {SmallAddIcon} from "@chakra-ui/icons";
import {AddForm} from "../AddForm/AddForm";
import {IAddNewItemButton} from "../../types/formTypes";


export const AddNewItemButton = (props: IAddNewItemButton) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if (showForm) {
        return <AddForm {...props} onClose={() => setShowForm(false)}/>
    }

    if (props.variant === 'description') {
        return (
            <Button
                isDisabled={props.isDisabled}
                onClick={() => setShowForm(true)}
                bg="orange.100"
                justifyContent="flex-start"
                _hover={{bg: "orange.200"}}
                color="black"
                rounded="false"
                w="full"
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Button
            onClick={() => setShowForm(true)}
            leftIcon={<SmallAddIcon/>}
            bg="orange.100"
            pl="8px"
            justifyContent="flex-start"
            _hover={{bg: "orange.200"}}
            color="black"
        >
            {props.text}
        </Button>
    )
};
