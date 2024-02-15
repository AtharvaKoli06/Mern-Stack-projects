import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import studentSlice from "./slices/CreateStudent.slice";
import getAllStudentsSlice from "./slices/getAllStudents.slice";
import createAttendenceListSlice from "./slices/CreateAttendenceList.slice";
import getAttendenceSlice from "./slices/getAllAttendence.slice";
import LoginSlice from "./auth/AuthLogin.slice";
import RegisterSlice from "./auth/AuthRegister.slice";
import refreshToken from "../redux/auth/AuthRefreshToken.slice";
import LogoutSlice from "./auth/AuthLogout.slice";

const persistconfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  allStudent: getAllStudentsSlice,
  attendence: createAttendenceListSlice,
  student: studentSlice,
  attendenceList: getAttendenceSlice,
  Login: LoginSlice,
  Register: RegisterSlice,
  RefreshToken: refreshToken,
  Logout: LogoutSlice,
});
const persistedReducer = persistReducer(persistconfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
