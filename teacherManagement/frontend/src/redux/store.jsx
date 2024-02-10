import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import studentSlice from "./slices/CreateStudent.slice";
import getAllStudentsSlice from "./slices/getAllStudents.slice";
import createAttendenceListSlice from "./slices/CreateAttendenceList.slice";
import getAttendenceSlice from "./slices/getAllAttendence.slice";

const persistconfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  student: studentSlice,
  allStudent: getAllStudentsSlice,
  attendence: createAttendenceListSlice,
  attendenceList: getAttendenceSlice,
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
