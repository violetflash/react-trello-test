import React, {useCallback, useState} from 'react';
import {Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {FaUser} from "react-icons/all";
import {ModalCasing} from "../ui";

export const ModalGetUsername = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [name, setName] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const getName = useCallback(() => {
        console.log(name);
        setIsOpen(false);
    }, [name]);

    return (
        <ModalCasing
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            modalTitle="Введите свое имя:"
            onAction={getName}
            actionTitle="Сохранить"
        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={FaUser} color='gray.300'/>}
                />
                <Input type='text' placeholder='Имя пользователя' onChange={handleInput} autoFocus/>
            </InputGroup>
        </ModalCasing>
    )
};