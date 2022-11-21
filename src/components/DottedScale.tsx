import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { useSelector } from "react-redux"
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
  const { dotStateArray } = useSelector(
    (state: AnimationState) => state.animation
  )

  return (
    <StyledDottedScale>
      <BigDot />
      {dotStateArray.map((dotState) => (
        <SmallDot key={dotState.id} isActive={dotState.isActive} />
      ))}
      <BigDot />
    </StyledDottedScale>
  )
}
