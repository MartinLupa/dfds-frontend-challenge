import styled from "@emotion/styled"
import { BigDot } from "./BigDot"
import { SmallDot } from "./SmallDot"

const StyledDottedScale = styled.div({
  height: "50px",
  margin: "0 3px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
})

export const DottedScale = () => {
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
