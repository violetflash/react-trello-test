import {ChakraProvider, theme} from "@chakra-ui/react"
import {Desk, ColorModeSwitcher, ModalGetUsername, User} from "./components";
import {Portal} from "./components/ui";


export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <User p="20px"/>
            <Desk/>
            <ModalGetUsername/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="10px"/>
            </Portal>
        </ChakraProvider>
    );
}
