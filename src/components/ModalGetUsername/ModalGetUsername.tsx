import React, {useState} from 'react';
import {Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {FaUser} from "react-icons/all";
import {ModalCasing} from "../ui";
import {useTypedDispatch} from "../../hooks/reduxHooks";
import { setUser } from '../../redux';

export const ModalGetUsername = () => {
    const dispatch = useTypedDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [value, setValue] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const setName = () => {
        dispatch(setUser(value));
        setIsOpen(false);
    };


    return (
        <ModalCasing
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            modalTitle="Введите свое имя:"
            onAction={setName}
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