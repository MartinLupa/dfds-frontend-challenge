import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { theme } from "../../themes"

const StyledSmallDot = styled.div({
  height: "10px",
  width: "10px",
  borderRadius: "50%",
  backgroundColor: theme.colors.lightBlue,
})

export const SmallDot = (): EmotionJSX.Element => {
  return <StyledSmallDot></StyledSmallDot>
}
