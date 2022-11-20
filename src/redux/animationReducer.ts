import { createSlice } from "@reduxjs/toolkit"

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    animate: false,
    duration: 0,
  },

  reducers: {
    animate: (state, action) => {
      state.animate = true
      state.duration = action.payload
    },
  },
})

export const { animate } = animationSlice.actions

export default animationSlice.reducer
