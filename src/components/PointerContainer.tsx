// import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Pointer } from "./ui/Pointer"

const StylePointerContainer = styled.div({
  height: "65px",
  padding: "0 12px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
})

export const PointerContainer = () => {
  return (
    <StylePointerContainer>
      <Pointer />
    </StylePointerContainer>
  )
}
