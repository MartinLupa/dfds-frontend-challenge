import styled from "@emotion/styled"

const StyledInput = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "10px",

  input: {
    height: "25px",
    width: "220px",
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
