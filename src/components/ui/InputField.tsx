import { EmotionJSX } from "@emotion/react/types/jsx-namespace"
import styled from "@emotion/styled"

//#region styles
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

//#region types
type TextInputProps = {
  label: string
  name: string
  type: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
//#endregion

export const InputField = ({
  label,
  name,
  value,
  type,
  onChange,
}: TextInputProps): EmotionJSX.Element => {
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
