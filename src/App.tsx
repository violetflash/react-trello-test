import {ChakraProvider, theme} from "@chakra-ui/react"
import {Cards, ColorModeSwitcher, ModalGetUsername} from "./components";
import {Portal} from "./components/ui";


export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Cards/>
            <ModalGetUsername/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="50%"/>
            </Portal>
        </ChakraProvider>
    );
}
