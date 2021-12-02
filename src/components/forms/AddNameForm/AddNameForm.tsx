import React, {useState} from 'react';
import {Button, Flex, Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {FaUser} from "react-icons/all";

interface IAddNameForm {
    onSubmit: (value: string) => void;
}

export const AddNameForm = ({onSubmit}: IAddNameForm) => {
    const [value, setValue] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Icon as={FaUser} color='gray.300'/>}
                />
                <Input type='text' placeholder='Имя пользователя' onChange={handleInput} autoFocus/>
            </InputGroup>
            <Flex justify="flex-end" mt="35px">
                <Button type="submit">Сохранить</Button>
            </Flex>
        </form>
    )
};
