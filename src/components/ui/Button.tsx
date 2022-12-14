import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { theme } from "../../themes"

const StyledButton = styled.button({
  width: "228px",
  height: "35px",
  marginTop: "10px",
  backgroundColor: theme.colors.darkBlue,
  color: theme.colors.white,
  fontSize: theme.fontSize.md,
  fontFamily: theme.fonts.main,

  ":hover": {
    backgroundColor: theme.colors.midBlue,
    transition: "0.1s",
  },
})

export const Button = (): EmotionJSX.Element => {
  return <StyledButton type="submit">Start Journey!</StyledButton>
}
