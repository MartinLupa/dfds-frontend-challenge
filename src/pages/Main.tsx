import styled from "@emotion/styled"
import { VoyageProgress } from "../components/VoyageProgress"

const StyledMain = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const Main = () => {
  return (
    <StyledMain>
      <VoyageProgress />
    </StyledMain>
  )
}
