import styled, { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    fontMain: "#000000",
    fontSecondary: "#4d4e4c",
    darkBlue: "#002b45",
    midBlue: "#345370",
    lightBlue: "#83a2c0",
  },
  fonts: {
    main: "'Montserrat', sans-serif",
  },
  fontSize: {
    sm: "0.7rem",
    md: "1rem",
    lg: "2rem",
  },

  body: {
    margin: 0,
    padding: 0,
  },
}

const StyledApp = styled.div`
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.fontMain};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <h1>Hello DFDS!</h1>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
