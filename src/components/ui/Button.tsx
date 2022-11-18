import styled from "@emotion/styled"
import { theme } from "../../Theme"

const StyledButton = styled.button({
  width: "228px",
  height: "35px",
  margin: "10px",
  backgroundColor: theme.colors.darkBlue,
  color: theme.colors.white,
  fontSize: theme.fontSize.md,
  fontFamily: theme.fonts.main,

  ":hover": {
    backgroundColor: theme.colors.midBlue,
    transition: "0.1s",
  },
})

export const Button = () => {
  return <StyledButton>Start Journey!</StyledButton>
}