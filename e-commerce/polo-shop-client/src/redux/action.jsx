import cardsDetailWithIdSlice from "./slices/DataWithId";
export const apiHandle = (key) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: cardsDetailWithIdSlice,
      key,
    });
  }, 1000);
};
