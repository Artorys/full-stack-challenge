import { Router } from "./routes"
import {RouterProvider} from "react-router-dom"
import {ThemeProvider} from "styled-components"
import { theme } from "./theme"
import { AuthProvider } from "./context/authContext"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
