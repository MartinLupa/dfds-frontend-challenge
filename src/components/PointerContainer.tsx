import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Pointer } from "./Pointer"

const movePointer = keyframes`
    0% {
      transform: translateX(0px)
    }
    100% {
      transform: translateX(450px)
    }
  `

const StylePointerContainer = styled.div({
  height: "65px",
  display: "flex",
  alignItems: "center",
  animation: `${movePointer} 3s linear`,
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

export const PointerContainer = () => {
  return (
    <StylePointerContainer>
      <Pointer />
    </StylePointerContainer>
  )
}
