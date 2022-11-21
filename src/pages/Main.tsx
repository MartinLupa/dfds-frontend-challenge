import styled from "@emotion/styled"
import { VoyageProgress } from "../components/VoyageProgress"

//#region styles
const StyledMain = styled.main({
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})
//#endregion

export const Main = () => {
  return (
    <StyledMain>
      <VoyageProgress />
    </StyledMain>
  )
}
