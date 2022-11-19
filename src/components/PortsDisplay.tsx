import styled from "@emotion/styled"
import { useSelector } from "react-redux"

const StyledPortsDisplay = styled.div({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 20px",
})

export const PortsDisplay = () => {
  const { departurePort, arrivalPort } = useSelector(
    (state: VoyageState) => state.voyage
  )

  return (
    <StyledPortsDisplay>
      <div>{departurePort}</div>
      <div>{arrivalPort}</div>
    </StyledPortsDisplay>
  )
}
