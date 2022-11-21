import { createSlice } from "@reduxjs/toolkit"

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    animate: false,
    duration: 0,
    dotStateArray: [
      { id: 1, animateOn: 0, isActive: false },
      { id: 2, animateOn: 0, isActive: false },
      { id: 3, animateOn: 0, isActive: false },
      { id: 4, animateOn: 0, isActive: false },
      { id: 5, animateOn: 0, isActive: false },
      { id: 6, animateOn: 0, isActive: false },
      { id: 7, animateOn: 0, isActive: false },
      { id: 8, animateOn: 0, isActive: false },
      { id: 9, animateOn: 0, isActive: false },
      { id: 10, animateOn: 0, isActive: false },
      { id: 11, animateOn: 0, isActive: false },
      { id: 12, animateOn: 0, isActive: false },
    ],
  },

  reducers: {
    setAnimation: (state, action) => {
      state.duration = action.payload.animationDuration

      const animationInterval = (action.payload.animationDuration * 1000) / 13
      for (let i = 0; i < state.dotStateArray.length; i++) {
        const animationDifference = animationInterval * (i + 1)
        state.dotStateArray[i].animateOn =
          action.payload.departureTimestamp + animationDifference
      }
    },
    animatePointer: (state) => {
      state.animate = true
    },
    animateDot: (state, action) => {
      state.dotStateArray.forEach((dot) => {
        if (action.payload >= dot.animateOn) {
          dot.isActive = true
        }
      })
    },
  },
})

export const { setAnimation, animatePointer, animateDot } =
  animationSlice.actions

export default animationSlice.reducer
