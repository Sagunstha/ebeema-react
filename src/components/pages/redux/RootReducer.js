import { combineReducers } from "redux";
import {
  categoryReducer,
  selectedCategoryReducer,
} from "./calculator/categoryReducer";
import { blogReducer, selectedBlogReducer } from "./blog/blogReducer";
import { resultReducer } from "./calculatorResult/resultReducer.js";
const reducers = combineReducers({
  allProducts: categoryReducer,
  product: selectedCategoryReducer,

  allBlogs: blogReducer,
  content: selectedBlogReducer,

  allResults: resultReducer,
});

export default reducers;
