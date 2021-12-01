import React, {useState} from 'react';
import {Button, Flex, IconButton, Input} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {useFocus} from "../../hooks/useFocus";

interface IAddCardForm {
    onClose: () => void;
}

export const AddCardForm = ({onClose}: IAddCardForm) => {
    const [value, setValue] = useState("");
    const inputRef = useFocus();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) {
            inputRef.current?.focus();
            return;
        }
        console.log(value);
        onClose();
    };



    return (
        <form onSubmit={handleSubmit}>
            <Input
                // variant='outline'
                placeholder='Название карточки'
                ref={inputRef}
                mb="20px"
                _placeholder={{color: "black"}}
                borderColor="gray.300"
                _hover={{borderColor: "blue.200"}}
                onChange={(e) => setValue(e.target.value)}
            />
            <Flex>
                <Button type="submit" colorScheme="blue">Добавить</Button>
                <IconButton
                    aria-label="закрыть форму"
                    icon={<CloseIcon/>}
                    onClick={onClose}
                />
            </Flex>

        </form>
    )
};
