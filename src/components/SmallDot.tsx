import styled from "@emotion/styled"
import { theme } from "../Theme"

const StyledSmallDot = styled.div({
  height: "10px",
  width: "10px",
  borderRadius: "50%",
  backgroundColor: theme.colors.lightBlue,
})

export const SmallDot = () => {
  return <StyledSmallDot></StyledSmallDot>
}
