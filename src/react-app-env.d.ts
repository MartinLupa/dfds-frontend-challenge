/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

type TextInputProps = {
  label: string
  name: string
  type: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

type StyledPointerWrapperProps = {
  isAnimated: boolean
  animationDuration: number
}

type VoyageState = {
  voyage: {
    departurePort: string
    arrivalPort: string
    departureTime: string
    arrivalTime: string
  }
}

type AnimationState = {
  animation: {
    animate: boolean
    duration: number
  }
}
