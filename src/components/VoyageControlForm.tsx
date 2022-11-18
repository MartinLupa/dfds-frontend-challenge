import styled from "@emotion/styled"
import { Button } from "./Button"
import { InputField } from "./InputField"

const StyledControlForm = styled.form({
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
})

const StyledFormGroup = styled.div({
  display: "flex",
  marginBottom: "10px",
  justifyContent: "space-between",
})

export const VoyageControlForm = () => {
  return (
    <StyledControlForm>
      <StyledFormGroup>
        <InputField />
        <InputField />
      </StyledFormGroup>
      <StyledFormGroup>
        <InputField />
        <InputField />
      </StyledFormGroup>
      <Button />
    </StyledControlForm>
  )
}
