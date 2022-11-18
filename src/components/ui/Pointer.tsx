import styled from "@emotion/styled"
import { theme } from "../../themes"

const StyledPointer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  width: "50px",
  transform: "rotate(45deg)",
  borderRadius: "15px 15px 0 15px",
  backgroundColor: theme.colors.midBlue,
  zIndex: 2,
})

const StyledCenterCircle = styled.div({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "white",
  zIndex: 3,
})

export const Pointer = () => {
  return (
    <StyledPointer>
      <StyledCenterCircle>
        {/* <StyledWaterLine></StyledWaterLine> */}
      </StyledCenterCircle>
    </StyledPointer>
  )
}
