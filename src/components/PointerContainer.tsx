import styled from "@emotion/styled"
import { Pointer } from "./Pointer"

const StylePointerContainer = styled.div({
  height: "65px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "green",
})

export const PointerContainer = () => {
  return (
    <StylePointerContainer>
      <Pointer />
    </StylePointerContainer>
  )
}
