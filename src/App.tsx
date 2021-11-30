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
import {ModalGetUsername} from "./components/ModalGetUsername/ModalGetUsername";

export const App = () => {






    return (
        <ChakraProvider theme={theme}>
            Hello
            <ModalGetUsername/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="50%"/>
            </Portal>
        </ChakraProvider>
    );
}
