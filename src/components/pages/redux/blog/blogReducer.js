import { ActionTypes } from "../ActionTypes";

const initialState = {
  contents: [
    // {
    //   title: "Insurance",
    //   id: 1,
    //   desc: "Life insurance",
    // },
  ],
};
export const blogReducer = (state = initialState, { type, payload }) => {
  // console.log("type", type);
  switch (type) {
    case ActionTypes.SET_BLOG:
      // console.log("payload", payload);
      return { ...state, contents: payload };

    default:
      return state;
  }
};

export const selectedBlogReducer = (state = {}, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case ActionTypes.SELECTED_BLOG:
      return { ...state, ...payload };
    default:
      return state;
  }
};
