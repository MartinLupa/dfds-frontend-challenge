import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { theme } from "../../themes"

//#region styles
const StyledSmallDot = styled.div<SmallDotProps>((props) => ({
  height: "10px",
  width: "10px",
  borderRadius: "50%",
  backgroundColor: props.isActive
    ? theme.colors.darkBlue
    : theme.colors.lightBlue,
}))
//#endregion

//#region types
type SmallDotProps = {
  isActive: boolean
}
//#endregion

export const SmallDot = ({ isActive }: SmallDotProps): EmotionJSX.Element => {
  return <StyledSmallDot isActive={isActive}></StyledSmallDot>
}
