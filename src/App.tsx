import React from "react";
import {
    ChakraProvider,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    theme,
    useDisclosure
} from "@chakra-ui/react"
import {ModalCasing, Portal} from "./components/ui";
import {ColorModeSwitcher} from "./components";
import {useCallback, useState} from "react";
import {FaUser} from "react-icons/all";

export const App = () => {
    const {isOpen, onClose} = useDisclosure({defaultIsOpen: true});
    const [name, setName] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const getName = useCallback(() => {
        console.log(name);
        onClose();
    }, [onClose, name]);

    return (
        <ChakraProvider theme={theme}>
            Hello

            <ModalCasing
                isOpen={isOpen}
                onClose={onClose}
                modalTitle="Введите свое имя:"
                onAction={getName}
                actionTitle="Сохранить"
            >
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Icon as={FaUser} color='gray.300'/>}
                    />
                    <Input type='text' placeholder='Имя пользователя' onChange={handleInput}/>
                </InputGroup>
            </ModalCasing>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="50%"/>
            </Portal>
        </ChakraProvider>
    );
}
