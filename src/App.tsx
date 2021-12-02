import {ChakraProvider, theme} from "@chakra-ui/react"
import {Desk, ColorModeSwitcher, User} from "./components";
import {Portal} from "./components/ui";
import {ModalCardView, ModalGetUsername} from "./components/modals";



export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <User p="20px"/>
            <Desk/>
            <ModalGetUsername/>
            <ModalCardView/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="10px"/>
            </Portal>
        </ChakraProvider>
    );
}
