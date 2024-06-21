
import { createSlice } from "@reduxjs/toolkit";

export const thanksSlice = createSlice({
  name: "thanks",
  initialState: {
    value: false
  },
  reducers: {
    setThanksDisplay: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setThanksDisplay } = thanksSlice.actions
export default thanksSlice.reducer