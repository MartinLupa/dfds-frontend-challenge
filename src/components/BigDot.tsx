import styled from "@emotion/styled"
import { theme } from "../Theme"

const StyledBigDot = styled.div({
  height: "20px",
  width: "20px",
  borderRadius: "50%",
  backgroundColor: theme.colors.midBlue,
})

export const BigDot = () => {
  return <StyledBigDot></StyledBigDot>
}
