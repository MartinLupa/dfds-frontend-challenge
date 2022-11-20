import styled from "@emotion/styled"

//#region component styles
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
//#endregion

export const InputField = ({
  label,
  name,
  value,
  type,
  onChange,
}: TextInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
      />
    </StyledInput>
  )
}
