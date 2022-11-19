import { createSlice } from "@reduxjs/toolkit"

export const voyageSlice = createSlice({
  name: "voyage",
  initialState: {
    departurePort: "",
    arrivalPort: "",
    departureTime: "",
    arrivalTime: "",
  },

  reducers: {
    update: (state, action) => {
      state.departurePort = action.payload.departurePort
      state.arrivalPort = action.payload.arrivalPort
      state.departureTime = action.payload.departureTime
      state.arrivalTime = action.payload.departureTime
    },
  },
})

export const { update } = voyageSlice.actions

export default voyageSlice.reducer
