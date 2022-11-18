import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { PointerContainer } from "./PointerContainer"

const movePointer = keyframes`
    0% {
      left: 0;
    }
    100% {
      left: 100;    
    }
  `

const StyledVoyageProgress = styled.div({
  height: "300px",
  width: "500px",
  animation: ` ${movePointer} 1s ease infinite`,
})

export const VoyageProgress = () => {
  return (
    <StyledVoyageProgress>
      <PointerContainer />
    </StyledVoyageProgress>
  )
}
