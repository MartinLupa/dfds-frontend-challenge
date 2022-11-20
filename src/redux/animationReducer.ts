import { createSlice } from "@reduxjs/toolkit"

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    animate: false,
    duration: 0,
  },

  reducers: {
    setAnimationDuration: (state, action) => {
      state.duration = action.payload
    },
    animate: (state) => {
      state.animate = true
    },
  },
})

export const { setAnimationDuration, animate } = animationSlice.actions

export default animationSlice.reducer
