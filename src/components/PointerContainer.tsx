import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Pointer } from "./Pointer"

const movePointer = keyframes`
    50% {
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
  animation: `${movePointer} 3s linear forwards`,
})

export const PointerContainer = () => {
  return (
    <StylePointerContainer>
      <Pointer />
    </StylePointerContainer>
  )
}
