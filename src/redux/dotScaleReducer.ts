import { createSlice } from "@reduxjs/toolkit"

export const dotScaleSlice = createSlice({
  name: "dotState",
  initialState: {
    dotStateArray: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },

  reducers: {
    setDotActive: (state, action) => {
      const setActiveInterval = action.payload / 12
      let i = action.payload

      setTimeout(() => {
        state.dotStateArray[i] = true
        i++
        if (i < state.dotStateArray.length) {
        }
      }, setActiveInterval)
    },
  },
})

export const { setDotActive } = dotScaleSlice.actions

export default dotScaleSlice.reducer
