
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const userSlice = createSlice({
  name: "user",
  initialState: {
    keyToken:false,
    user: {
      phone:""
    },
    defaultUsers:[  
      {id:1,name:"@knightsaul",image:require("../../assets/images/avatars/players/player1.png"),active:false,choose:false},
    {id:2,name:"@sarai",image:require("../../assets/images/avatars/players/player2.png"),active:false,choose:false,},
    {id:3,name:"@jumuke",image:require("../../assets/images/avatars/players/player3.png"),active:true,choose:false},
    {id:4,name:"@dave",image:require("../../assets/images/avatars/players/player4.png"),active:false,choose:false}
  ]
  },
  reducers: {
    setUserDetails(state, action: PayloadAction<string>) {
      state.user = {...state.user,phone:action.payload}
    },
    setToken(state){
state.keyToken=true
    }
  }
})

export const { setUserDetails,setToken } = userSlice.actions
export default userSlice.reducer