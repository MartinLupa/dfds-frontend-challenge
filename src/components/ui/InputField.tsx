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

export const InputField = ({ labelName, type }: TextInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={labelName}>{labelName}</label>
      <input type={type} id={labelName} name={labelName} />
    </StyledInput>
  )
}
