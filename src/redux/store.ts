import { configureStore } from "@reduxjs/toolkit"
import animationReducer from "./animationReducer"
import dotScaleReducer from "./dotScaleReducer"
import voyageReducer from "./voyageReducer"

export default configureStore({
  reducer: {
    voyage: voyageReducer,
    animation: animationReducer,
    dotState: dotScaleReducer,
  },
})
