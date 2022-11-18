import styled from "@emotion/styled"

const StyledInput = styled.div({
  display: "flex",
  flexDirection: "column",

  label: {
    marginTop: "5px",
  },

  input: {
    height: "25px",
    width: "auto",
  },
})

export const InputField = () => {
  return (
    <StyledInput>
      <label htmlFor="">Departure port </label>
      <input type="text" />
    </StyledInput>
  )
}
