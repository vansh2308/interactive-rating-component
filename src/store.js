import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from "./features/ratingSlice"

export default configureStore({
  reducer: {
    rating: ratingReducer
  }
})