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

export const InputField = ({ label, name, type, onChange }: TextInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input onChange={onChange} type={type} id={name} name={name} />
    </StyledInput>
  )
}
