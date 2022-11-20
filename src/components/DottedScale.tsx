import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { BigDot } from "./ui/BigDot"
import { SmallDot } from "./ui/SmallDot"

//#region styles
const StyledDottedScale = styled.div({
  height: "50px",
  padding: "0 27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
})
//#endregion

export const DottedScale = (): EmotionJSX.Element => {
  return (
    <StyledDottedScale>
      <BigDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <SmallDot />
      <BigDot />
    </StyledDottedScale>
  )
}
