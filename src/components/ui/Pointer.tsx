import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import { mq } from "../../media-queres"
import { theme } from "../../themes"

//#region styles
const movePointerMobile = keyframes`
    0% {
      transform: translateX(0px)
    }
    100% {
      transform: translateX(300px)
    }
  `

const movePointerTablet = keyframes`
0% {
  transform: translateX(0px)
}
100% {
  transform: translateX(426px)
}
`

const StyledPointerWrapper = styled.div<StyledPointerWrapperProps>(
  {
    width: "50px",
    height: "55px",
  },

  (props) =>
    props.isAnimated && {
      animation: `${movePointerMobile} ${props.animationDuration}s linear forwards`,
      [mq("small")]: {
        animation: `${movePointerTablet} ${props.animationDuration}s linear forwards`,
      },
    }
)

const StyledPointer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  width: "100%",
  transform: "rotate(45deg)",
  borderRadius: "15px 15px 0 15px",
  backgroundColor: theme.colors.midBlue,
})

const StyledCenterCircle = styled.div({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "white",
  zIndex: 3,
})
//#endregion

//#region types
type StyledPointerWrapperProps = {
  isAnimated: boolean
  animationDuration: number
}
//#endregion

export const Pointer = () => {
  const { animate, duration } = useSelector(
    (state: AnimationState) => state.animation
  )

  return (
    <StyledPointerWrapper isAnimated={animate} animationDuration={duration}>
      <StyledPointer>
        <StyledCenterCircle></StyledCenterCircle>
      </StyledPointer>
    </StyledPointerWrapper>
  )
}
