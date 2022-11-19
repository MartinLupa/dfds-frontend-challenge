/// <reference types="react-scripts" />
/// <reference types="@emotion/react/types/css-prop" />

type TextInputProps = {
  label: string
  name: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

type VoyageState = {
  voyage: {
    departurePort: string
    arrivalPort: string
    departureTime: string
    arrivalTime: string
  }
}
