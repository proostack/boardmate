
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      phone:""
    }
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = {...state.user,phone:action.payload}
    }
  }
})

export const { setUserDetails } = userSlice.actions
export default userSlice.reducer