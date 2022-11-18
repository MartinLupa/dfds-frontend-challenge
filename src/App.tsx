import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import { Main } from "./pages/Main"
import { theme } from "./Theme"

const StyledApp = styled.div({
  fontFamily: theme.fonts.main,
  fontSize: theme.fontSize.md,
  height: "100vh",
  width: "100vw",
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Main />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
