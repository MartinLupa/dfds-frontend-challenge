import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFrame } from "use-frame"
import { calculateDepartureTimestamp } from "../helpers/calculateDepartureTimestamp"
import { calculateTimeDiference } from "../helpers/calculateTimeDiference"
import { animate, setAnimation } from "../redux/animationReducer"
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

const initialState = {
  portOfLoading: "",
  portOfDischarge: "",
  departureTime: "",
  arrivalTime: "",
}

export const VoyageControlForm = (): EmotionJSX.Element => {
  const [voyageInformation, setVoyageInformation] = useState(initialState)
  const [currentTimestamp, setCurrentTimestamp] = useState(0)
  //const [departureTimestamp, setDepartureTimestamp] = useState(0)
  const { departureTimestamp } = useSelector(
    (state: VoyageState) => state.voyage
  )
  const [now, setNow] = useState(0)
  const dispatch = useDispatch()

  //#region timestamp and animation handling
  useFrame(({ timestamp }) => {
    setCurrentTimestamp(timestamp)
    if (
      departureTimestamp !== 0 &&
      departureTimestamp - (now + currentTimestamp) <= 0
    ) {
      dispatch(animate())
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
    setVoyageInformation(initialState)
  }
  //#endregion

  useEffect(() => {
    setNow(Date.now())
  }, [])

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
