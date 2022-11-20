import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useFrame } from "use-frame"
import { calculateDepartureTimestamp } from "../helpers/calculateDepartureTimestamp"
import { calculateTimeDiference } from "../helpers/calculateTimeDiference"
import { animate, setAnimationDuration } from "../redux/animationReducer"
import { update } from "../redux/voyageReducer"
import { Button } from "./ui/Button"
import { InputField } from "./ui/InputField"

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

const initialState = {
  departurePort: "",
  arrivalPort: "",
  departureTime: "",
  arrivalTime: "",
}

export const VoyageControlForm = () => {
  const [voyageInformation, setVoyageInformation] = useState(initialState)
  const [currentTimestamp, setCurrentTimestamp] = useState(0)
  const [departureTimestamp, setDepartureTimestamp] = useState(0)
  const [now, setNow] = useState(0)
  const dispatch = useDispatch()

  useFrame(({ timestamp }) => {
    setCurrentTimestamp(timestamp)
    if (
      departureTimestamp !== 0 &&
      departureTimestamp - (now + currentTimestamp) <= 0
    ) {
      dispatch(animate())
    }
  })

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.id
    const newValue = event.target.value
    setVoyageInformation({ ...voyageInformation, ...{ [inputName]: newValue } })
  }

  const handleFormSubmision = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setDepartureTimestamp(
      calculateDepartureTimestamp(voyageInformation.departureTime)
    )
    const animationDuration = calculateTimeDiference(
      voyageInformation.departureTime,
      voyageInformation.arrivalTime
    )
    dispatch(setAnimationDuration(animationDuration))
    dispatch(update(voyageInformation))
    setVoyageInformation(initialState)
  }

  useEffect(() => {
    setNow(Date.now())
  }, [])

  return (
    <StyledControlForm onSubmit={handleFormSubmision}>
      <StyledFormGroup>
        <InputField
          onChange={handleInput}
          label={"Departure port"}
          name={"departurePort"}
          type={"text"}
          value={voyageInformation.departurePort}
        />
        <InputField
          onChange={handleInput}
          label={"Arrival port"}
          name={"arrivalPort"}
          type={"text"}
          value={voyageInformation.arrivalPort}
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
