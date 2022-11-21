import { createSlice } from "@reduxjs/toolkit"
import { calculateDepartureTimestamp } from "../helpers/calculateDepartureTimestamp"

export const voyageSlice = createSlice({
  name: "voyage",
  initialState: {
    portOfLoading: "",
    portOfDischarge: "",
    departureTime: "",
    arrivalTime: "",
    departureTimestamp: 0,
  },

  reducers: {
    setVoyage: (state, action) => {
      state.portOfLoading = action.payload.portOfLoading
      state.portOfDischarge = action.payload.portOfDischarge
      state.departureTime = action.payload.departureTime
      state.arrivalTime = action.payload.arrivalTime
      state.departureTimestamp = calculateDepartureTimestamp(
        state.departureTime
      )
    },
  },
})

export const { setVoyage } = voyageSlice.actions

export default voyageSlice.reducer
