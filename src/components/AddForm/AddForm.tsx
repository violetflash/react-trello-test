import React, {useState} from 'react';
import {Button, Flex, IconButton, Input} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {useFocus} from "../../hooks/useFocus";
import {IAddFormBase} from '../../types/formTypes';

interface IAddForm extends IAddFormBase {
    onClose: () => void;
}

export const AddForm = ({onClose, onAdd, placeholder, buttonText = "Добавить"}: IAddForm) => {
    const [value, setValue] = useState("");
    const inputRef = useFocus();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) {
            inputRef.current?.focus();
            return;
        }

        onAdd(value);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <Input
                placeholder={placeholder}
                ref={inputRef}
                w="full"
                mb="20px"
                _placeholder={{color: "black"}}
                borderColor="gray.300"
                bg="white"
                color="black"
                _hover={{borderColor: "blue.200"}}
                onChange={(e) => setValue(e.target.value)}
            />
            <Flex>
                <Button
                    type="submit"
                    bg="orange.100"
                    color="black"
                    _hover={{bg: "orange.200"}}
                >
                    {buttonText}
                </Button>
                <IconButton
                    ml="10px"
                    variant="outline"
                    aria-label="закрыть форму"
                    icon={<CloseIcon/>}
                    onClick={onClose}
                    _hover={{bg: "blue.100"}}
                    color="gray.600"
                />
            </Flex>
        </form>
    )
};
