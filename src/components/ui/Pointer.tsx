import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { mq } from "../../media-queres"
import { theme } from "../../themes"

const movePointerMobile = keyframes`
    50% {
      transform: translateX(0px)
    }
    100% {
      transform: translateX(300px)
    }
  `

const movePointerTablet = keyframes`
50% {
  transform: translateX(0px)
}
100% {
  transform: translateX(425px)
}
`

const StyledPointerWrapper = styled.div({
  width: "50px",
  height: "55px",
  animation: `${movePointerMobile} 3s linear forwards`,

  [mq("small")]: {
    animation: `${movePointerTablet} 3s linear forwards`,
  },
})

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

export const Pointer = () => {
  return (
    <StyledPointerWrapper>
      <StyledPointer>
        <StyledCenterCircle>
          {/* <StyledWaterLine></StyledWaterLine> */}
        </StyledCenterCircle>
      </StyledPointer>
    </StyledPointerWrapper>
  )
}
