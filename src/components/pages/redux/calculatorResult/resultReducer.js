import { ActionTypes } from "../ActionTypes";

const initialState = {
  results: [
    // {
    //   title: "Calculator result",
    //   id: 1,
    //   desc: "Resultssss",
    // },
  ],
};
export const resultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RESULT:
      return { ...state, results: payload };
    default:
      return state;
  }
};
