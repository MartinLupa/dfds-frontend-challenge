import styled from "@emotion/styled"
import { InputField } from "./ui/InputField"
import { Button } from "./ui/Button"

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
