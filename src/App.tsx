import {ChakraProvider, theme} from "@chakra-ui/react"
import {Desk, ColorModeSwitcher, ModalGetUsername} from "./components";
import {Portal} from "./components/ui";


export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Desk/>
            <ModalGetUsername/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="5px"/>
            </Portal>
        </ChakraProvider>
    );
}
