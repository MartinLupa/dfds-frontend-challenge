import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { DottedScale } from "./DottedScale"
import { PointerContainer } from "./PointerContainer"
import { PortsDisplay } from "./PortsDisplay"
import { VoyageControlForm } from "./VoyageControlForm"

//#region styles
const StyledVoyageProgress = styled.div({
  width: "500px",
})
//#endregion

export const VoyageProgress = (): EmotionJSX.Element => {
  return (
    <StyledVoyageProgress>
      <PointerContainer />
      <DottedScale />
      <PortsDisplay />
      <VoyageControlForm />
    </StyledVoyageProgress>
  )
}
