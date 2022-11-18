import styled from "@emotion/styled"
import { theme } from "../Theme"

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

// const StyledWaterLine = styled.div({
//   height: "18px",
//   width: "36px",
//   transform: "rotate(-45deg)",
//   margin: "20px 0 0 11px",
//   borderRadius: "0 0 80px 80px",
//   zIndex: 2,

//   backgroundColor: theme.colors.lightBlue,
// })

export const Pointer = () => {
  return (
    <StyledPointer>
      <StyledCenterCircle>
        {/* <StyledWaterLine></StyledWaterLine> */}
      </StyledCenterCircle>
    </StyledPointer>
  )
}
