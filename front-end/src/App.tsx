import { Router } from "./routes"
import {RouterProvider} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import { theme } from "./theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
