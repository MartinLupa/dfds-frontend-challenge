import styled from "@emotion/styled"
import { Pointer } from "./Pointer"

const StyledVoyageProgress = styled.div({
  height: "300px",
  width: "500px",
  border: "1px solid black",
})

export const VoyageProgress = () => {
  return (
    <StyledVoyageProgress>
      <Pointer />
    </StyledVoyageProgress>
  )
}
