import axios from "axios";
import ActionTypes from "../ActionTypes";

export const fetchAllResult = () => async (dispatch) => {
  const response = await axios.get(
    `https://ispl.ebeema.com/api/blogs/all?search`
  );
  console.log("responsesssss", response);
  dispatch({ type: ActionTypes.SET_RESULT, payload: response.data });
};

export const setResult = (results) => {
  return {
    type: ActionTypes.SET_RESULT,
    payload: results,
  };
};
