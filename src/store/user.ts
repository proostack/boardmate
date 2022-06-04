<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "first user"
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  }
})

export const { setUserDetails } = userSlice.actions
export default userSlice.reducer
=======
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "first user"
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = action.payload
    }
  }
})

export const { setUserDetails } = userSlice.actions
export default userSlice.reducer
>>>>>>> 97be44104d8b9e7f15c17e7285aa76335b1947ff
