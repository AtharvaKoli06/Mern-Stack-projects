import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardsDetailSlice from "./slices/AllData.slice";
import cardsDetailWithIdSlice from "./slices/DataWithId.slice";

import signUpSlice from "./slices/Form.slice";

import { thunk } from "redux-thunk";

const persistconfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cardDetails: cardsDetailSlice,
  cardDetailsWithId: cardsDetailWithIdSlice,
  user: signUpSlice,
});
const persistedReducer = persistReducer(persistconfig, rootReducer);

const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk)
);

const persistor = persistStore(store);
export { store, persistor };
