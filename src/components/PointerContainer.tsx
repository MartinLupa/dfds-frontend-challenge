import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { Pointer } from "./ui/Pointer"

//#region styles
const StylePointerContainer = styled.div({
  height: "65px",
  padding: "0 12px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
})
//#endregion

export const PointerContainer = (): EmotionJSX.Element => {
  return (
    <StylePointerContainer>
      <Pointer />
    </StylePointerContainer>
  )
}
