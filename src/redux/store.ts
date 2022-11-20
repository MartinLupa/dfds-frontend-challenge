import { configureStore } from "@reduxjs/toolkit"
import animationReducer from "./animationReducer"
import voyageReducer from "./voyageReducer"

export default configureStore({
  reducer: { voyage: voyageReducer, animation: animationReducer },
})
