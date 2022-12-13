import { combineReducers } from "redux";
// import {quransReducers} from './quranReducers';
import authSlice from "../slice/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const rootReducer = (state: any, action: PayloadAction<string>) => {
  // if (action.type === 'auth/logout') {
  //   AsyncStorage.removeItem(authSlice.name);

  //   state = undefined;
  // }
  return reducers(state, action);
};

export const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [authSlice.name],
};
