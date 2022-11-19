/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

type TextInputProps = {
  label: string
  name: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
