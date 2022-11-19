import { configureStore } from "@reduxjs/toolkit"
import voyageReducer from "./voyageReducer"

export default configureStore({
  reducer: { voyage: voyageReducer },
})
