import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import DFDSLogo from "./assets/DFDS_Logo.png"
import { Main } from "./pages/Main"
import { theme } from "./Theme"

const StyledApp = styled.div({
  fontFamily: theme.fonts.main,
  fontSize: theme.fontSize.md,
  height: "100vh",
  width: "100vw",
})

const StyledNav = styled.nav({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
})

const StyledLogo = styled.img({
  height: "80px",
  width: "auto",
  marginRight: "20px",
})

function App() {
  return (
    <StyledApp>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <StyledNav>
        <StyledLogo src={DFDSLogo} alt="DFDS company logo" />
        <h1>Welcome to the DFDS Frontend Challenge!</h1>
      </StyledNav>
      <Main />
    </StyledApp>
  )
}

export default App
