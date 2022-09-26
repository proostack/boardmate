
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Icons } from "../app"
const userSlice = createSlice({
  name: "user",
  initialState: {
    keyToken: null,
    player: { name: 'AI', image: Icons.player1 },
    user: {
      phone: Array(1)
    },
    defaultUsers: [
      { id: 1, name: "@knightsaul", image: Icons.player1, active: false, choose: false },
      { id: 2, name: "@sarai", image: Icons.player2, active: false, choose: false, },
      { id: 3, name: "@jumuke", image: Icons.player3, active: true, choose: false },
      { id: 4, name: "@dave", image: Icons.player4, active: false, choose: false }
    ],
    themes: [
      { THEME: false },
      { THEME: false },
      { THEME: false }
    ]
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string[]>) {
      state.user = { ...state.user, phone: [...action.payload] }
    },
    setToken(state, action) {
      state.keyToken = action.payload
    },
    setTheme(state, action) {
      state.themes = state.themes.map((item, index) => index === action.payload ? ({ THEME: true }) : ({ THEME: false }))
    },
    setPlayer(state, action) {
      state.player = action.payload
    }
  }
})

export const { setUserDetails, setToken, setTheme, setPlayer } = userSlice.actions
export default userSlice.reducer