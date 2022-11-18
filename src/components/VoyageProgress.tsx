import styled from "@emotion/styled"
import { DottedScale } from "./DottedScale"
import { PointerContainer } from "./PointerContainer"

const StyledVoyageProgress = styled.div({
  height: "300px",
  width: "500px",
})

export const VoyageProgress = () => {
  return (
    <StyledVoyageProgress>
      <PointerContainer />
      <DottedScale />
    </StyledVoyageProgress>
  )
}
