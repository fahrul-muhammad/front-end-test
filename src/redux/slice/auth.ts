import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"

export const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    data: [],
  },
  reducers:{
    saveData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: action.payload
      }
    }
  }
});

export const {saveData} = LoginSlice.actions

export default LoginSlice