import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { App } from "./App"
import {store} from "./redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ColorModeScript />
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)

