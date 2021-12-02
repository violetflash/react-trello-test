import {ChakraProvider, Divider, theme} from "@chakra-ui/react"
import {Desk, ColorModeSwitcher, User} from "./components";
import {Portal} from "./components/ui";
import {ModalAlert, ModalCardView, ModalGetUsername} from "./components/modals";



export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <User p="20px"/>
            <Divider/>
            <Desk/>
            <ModalGetUsername/>
            <ModalCardView/>
            <ModalAlert/>
            <Portal>
                <ColorModeSwitcher position="fixed" right="40px" top="10px"/>
            </Portal>
        </ChakraProvider>
    );
}
