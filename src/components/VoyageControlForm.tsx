import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFrame } from "use-frame"
import { calculateDepartureTimestamp } from "../helpers/calculateDepartureTimestamp"
import { calculateTimeDiference } from "../helpers/calculateTimeDiference"
import {
  animateDot,
  animatePointer,
  setAnimation,
} from "../redux/animationReducer"
import { setVoyage } from "../redux/voyageReducer"
import { Button } from "./ui/Button"
import { InputField } from "./ui/InputField"

//#region styles
const StyledControlForm = styled.form({
  padding: "27px",
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
})

const StyledFormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
  justifyContent: "space-between",
})
//#endregion

//#region initialStates
const voyageInitialState = {
  portOfLoading: "",
  portOfDischarge: "",
  departureTime: "",
  arrivalTime: "",
}

const timestampInitialState = Date.now()
//#endregion

export const VoyageControlForm = (): EmotionJSX.Element => {
  const [voyageInformation, setVoyageInformation] = useState(voyageInitialState)
  const [currentTimestamp, setCurrentTimestamp] = useState(
    timestampInitialState
  )
  const { departureTimestamp } = useSelector(
    (state: VoyageState) => state.voyage
  )
  const dispatch = useDispatch()

  //#region timestamp and animation handling
  useFrame(({ timestamp }) => {
    setCurrentTimestamp(timestampInitialState + timestamp)
    if (
      departureTimestamp !== 0 &&
      departureTimestamp - currentTimestamp <= 0
    ) {
      dispatch(animatePointer())
      dispatch(animateDot(currentTimestamp))
    }
  })
  //#endregion

  //#region onChange input handling
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.id
    const newValue = event.target.value
    setVoyageInformation({ ...voyageInformation, ...{ [inputName]: newValue } })
  }
  //#endregion

  //#region form submission
  const handleFormSubmision = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const departureTimestamp = calculateDepartureTimestamp(
      voyageInformation.departureTime
    )

    const animationDuration = calculateTimeDiference(
      voyageInformation.departureTime,
      voyageInformation.arrivalTime
    )

    dispatch(setVoyage(voyageInformation))
    dispatch(setAnimation({ animationDuration, departureTimestamp }))
    setVoyageInformation(voyageInitialState)
  }
  //#endregion

  return (
    <StyledControlForm onSubmit={handleFormSubmision}>
      <StyledFormGroup>
        <InputField
          onChange={handleInput}
          label={"Port of loading"}
          name={"portOfLoading"}
          type={"text"}
          value={voyageInformation.portOfLoading}
        />
        <InputField
          onChange={handleInput}
          label={"Port of discharge"}
          name={"portOfDischarge"}
          type={"text"}
          value={voyageInformation.portOfDischarge}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <InputField
          onChange={handleInput}
          label={"Departure time"}
          name={"departureTime"}
          type={"time"}
          value={voyageInformation.departureTime}
        />
        <InputField
          onChange={handleInput}
          label={"Arrival time"}
          name={"arrivalTime"}
          type={"time"}
          value={voyageInformation.arrivalTime}
        />
      </StyledFormGroup>
      <Button />
    </StyledControlForm>
  )
}
