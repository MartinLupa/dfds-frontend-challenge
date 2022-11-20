import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { useSelector } from "react-redux"

//#region styles
const StyledPortsDisplay = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 20px",
  height: "20px",
})
//#endregion

export const PortsDisplay = (): EmotionJSX.Element => {
  const { portOfLoading, portOfDischarge } = useSelector(
    (state: VoyageState) => state.voyage
  )

  return (
    <StyledPortsDisplay>
      <div>{portOfLoading}</div>
      <div>{portOfDischarge}</div>
    </StyledPortsDisplay>
  )
}
