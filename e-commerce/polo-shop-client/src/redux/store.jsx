import { configureStore } from "@reduxjs/toolkit";

import cardsDetailSlice from "./slices/AllData";
import cardsDetailWithIdSlice from "./slices/DataWithId";

const store = configureStore({
  reducer: {
    cardDetails: cardsDetailSlice,
    cardDetailsWithId: cardsDetailWithIdSlice,
  },
});
export default store;
