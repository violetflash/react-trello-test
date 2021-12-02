import React, {useState} from 'react';
import {Button, Flex, IconButton, Input, SlideFade,} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";
import {IAddFormBase} from "../../../types/formTypes";
import {useFocus} from "../../../hooks/useFocus";


interface IAddForm extends IAddFormBase {
    onClose: () => void;
    isOpen: boolean;
    text?: string;
    isEmptyAllowed?: boolean;
    description?: string;
}

export const AddForm = (
    {
        isOpen,
        onClose,
        onAdd,
        placeholder,
        text,
        description,
        buttonText = "Добавить",
        isEmptyAllowed = false,
    }: IAddForm) => {

    const [value, setValue] = useState(() => description || "");
    const inputRef = useFocus();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isEmptyAllowed && !value) {
            inputRef.current?.focus();
            return;
        }


        onAdd(value.trim());
        onClose();
    };

    return (
        <SlideFade offsetY='-20px' in={isOpen} style={{width: "100%"}}>
            <form onSubmit={handleSubmit} style={{width: "100%"}}>
                <Input
                    placeholder={placeholder}
                    ref={inputRef}
                    w="full"
                    mb="20px"
                    _placeholder={{color: "black"}}
                    borderColor="gray.300"
                    value={value}
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
        </SlideFade>
    )
};
