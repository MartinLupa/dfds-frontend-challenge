import styled from "@emotion/styled"
import DFDSLogo from "../assets/DFDS_Logo.png"
import { VoyageProgress } from "../components/VoyageProgress"
import { theme } from "../Theme"

const StyledLogo = styled.img({
  height: "80px",
  width: "auto",
  marginRight: "20px",
})

const StyledNav = styled.nav({
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
})

export const Main = () => {
  return (
    <div>
      <StyledNav>
        <StyledLogo src={DFDSLogo} alt="DFDS company logo" />
        <h1>Welcome to the DFDS Frontend Challenge!</h1>
      </StyledNav>
      <VoyageProgress />
    </div>
  )
}
