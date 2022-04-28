import { ActionTypes } from "../ActionTypes";
import axios from "axios";

export const fetchAllBlog = () => async (dispatch) => {
  const response = await axios.get(
    `https://ispl.ebeema.com/api/blogs/all?search`
  );
  // console.log("responsesssss", response);
  dispatch({ type: ActionTypes.SET_BLOG, payload: response.data });
};
export const fetchSelectedBlog = (id) => async (dispatch) => {
  // console.log("idsss", id);
  const response = await axios.get(
    `https://ispl.ebeema.com/api/blogs/detail/${id}`
  );
  // console.log("responsesssss", response);
  dispatch({ type: ActionTypes.SELECTED_BLOG, payload: response.data });
};

// export const setBlog = (contents) => {
//   console.log("contents", contents);
//   return {
//     type: ActionTypes.SET_BLOG,
//     payload: contents,
//   };
// };
// export const selectedBlog = (content) => {
//   return {
//     type: ActionTypes.SELECTED_BLOG,
//     payload: content,
//   };
// };
