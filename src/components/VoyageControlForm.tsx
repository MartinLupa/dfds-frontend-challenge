import styled from "@emotion/styled"
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

export const VoyageControlForm = () => {
  return (
    <StyledControlForm>
      <StyledFormGroup>
        <InputField labelName={"Departure port"} type={"text"} />
        <InputField labelName={"Arrival port"} type={"text"} />
      </StyledFormGroup>
      <StyledFormGroup>
        <InputField labelName={"Departure time"} type={"time"} />
        <InputField labelName={"Arrival time"} type={"time"} />
      </StyledFormGroup>
      <Button />
    </StyledControlForm>
  )
}
