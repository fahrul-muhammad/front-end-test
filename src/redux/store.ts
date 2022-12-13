import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { persistConfig, rootReducer } from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      // thunk,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const makeStore = () => store;

type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export const wrapper = makeStore;
export type AppDispatch = typeof store.dispatch;

export const selectAuth = (state: RootState) => state.Login.data;
