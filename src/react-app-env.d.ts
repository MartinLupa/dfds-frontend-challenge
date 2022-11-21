/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

//Types defined here are used across components
type AnimationState = {
  animation: {
    animate: boolean
    duration: number
    dotStateArray: { id: string; animateOn: number; isActive: boolean }[]
  }
}

type VoyageState = {
  voyage: {
    portOfLoading: string
    portOfDischarge: string
    departureTime: string
    arrivalTime: string
    departureTimestamp: number
  }
}
