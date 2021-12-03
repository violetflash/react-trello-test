import React, {useState} from 'react';
import {Button} from "@chakra-ui/react";
import {SmallAddIcon} from "@chakra-ui/icons";
import {AddForm} from "../forms";
import {IAddNewItemButton} from "../../types/formTypes";

export const AddNewItemButton = (props: IAddNewItemButton) => {
    const [showForm, setShowForm] = useState<boolean>(false);

    if (showForm) {
        return (
            <AddForm
                {...props}
                isEmptyAllowed={props?.variant === 'description'}
                text={props.variant === 'description' ? props.text : undefined}
                isOpen={showForm}
                onClose={() => setShowForm(false)}
            />
        );
    }

    if (props.variant === 'description') {
        return (
            <Button
                isDisabled={props.isDisabled}
                onClick={() => setShowForm(true)}
                bg="gray.200"
                py="10px"
                justifyContent="flex-start"
                _hover={{bg: "gray.300"}}
                color="black"
                minHeight="80px"
                alignItems="flex-start"
                rounded="false"
                w="full"
            >
                {props.text}
            </Button>
        )
    }

    return (
        <Button
            isDisabled={props.isDisabled}
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
