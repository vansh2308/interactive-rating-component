import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "rating",
  initialState: {
    value: 0
  },
  reducers: {
    setRating: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setRating } = ratingSlice.actions
export default ratingSlice.reducer