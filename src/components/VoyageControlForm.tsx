import styled from "@emotion/styled"
import { useState } from "react"
import { useDispatch } from "react-redux"
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
  const dispatch = useDispatch()

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.id
    const newValue = event.target.value
    setVoyageInformation({ ...voyageInformation, ...{ [inputName]: newValue } })
  }

  const handleFormSubmision = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(update(voyageInformation))
    //setVoyageInformation(initialState)
    //console.log(voyageInformation)
  }

  return (
    <StyledControlForm onSubmit={handleFormSubmision}>
      <StyledFormGroup>
        <InputField
          onChange={handleInput}
          label={"Departure port"}
          name={"departurePort"}
          type={"text"}
        />
        <InputField
          onChange={handleInput}
          label={"Arrival port"}
          name={"arrivalPort"}
          type={"text"}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <InputField
          onChange={handleInput}
          label={"Departure time"}
          name={"departureTime"}
          type={"time"}
        />
        <InputField
          onChange={handleInput}
          label={"Arrival time"}
          name={"arrivalTime"}
          type={"time"}
        />
      </StyledFormGroup>
      <Button />
    </StyledControlForm>
  )
}
