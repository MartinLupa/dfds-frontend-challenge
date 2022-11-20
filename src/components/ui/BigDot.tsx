import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { theme } from "../../themes"

const StyledBigDot = styled.div({
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  backgroundColor: theme.colors.midBlue,
})

export const BigDot = (): EmotionJSX.Element => {
  return <StyledBigDot></StyledBigDot>
}
