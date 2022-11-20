import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import DFDSLogo from "./assets/DFDS_Logo.png"
import { mq } from "./media-queres"
import { Main } from "./pages/Main"
import { theme } from "./themes"

//#region component styles
const StyledApp = styled.div({
  fontSize: theme.fontSize.md,
  height: "100vh",
  width: "100vw",
})

const StyledNav = styled.nav({
  fontSize: theme.fontSize.sm,
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
  boxShadow: `${theme.colors.lightGrey} 0 1.95px 2.6px`,

  [mq("medium")]: {
    fontSize: theme.fontSize.md,
  },
})

const StyledLogo = styled.img({
  height: "40px",
  width: "auto",
  paddingLeft: "5px",
  marginRight: "20px",
})
//#endregion

function App() {
  return (
    <StyledApp>
      <Global
        styles={{
          body: {
            fontFamily: `${theme.fonts.main}`,
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
