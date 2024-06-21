import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./features/ratingSlice"
import thanksReducer from "./features/thanksSlice"

export default configureStore({
  reducer: {
    rating: ratingReducer,
    thanksDisplay: thanksReducer
  }
})