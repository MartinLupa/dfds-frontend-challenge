import { createSlice } from "@reduxjs/toolkit"

export const voyageSlice = createSlice({
  name: "voyage",
  initialState: {
    portOfLoading: "",
    portOfDischarge: "",
    departureTime: "",
    arrivalTime: "",
  },

  reducers: {
    update: (state, action) => {
      state.portOfLoading = action.payload.portOfLoading
      state.portOfDischarge = action.payload.portOfDischarge
      state.departureTime = action.payload.departureTime
      state.arrivalTime = action.payload.arrivalTime
    },
  },
})

export const { update } = voyageSlice.actions

export default voyageSlice.reducer
