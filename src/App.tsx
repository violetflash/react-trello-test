import * as React from "react"
import {ChakraProvider, theme,} from "@chakra-ui/react"
import {Portal} from "./components/ui";
import {ColorModeSwitcher} from "./components";


export const App = () => (
    <ChakraProvider theme={theme}>
        Hello
        <Portal>
            <ColorModeSwitcher position="fixed" right="40px" top="50%"/>
        </Portal>
    </ChakraProvider>
)
