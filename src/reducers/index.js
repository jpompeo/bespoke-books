import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tagsReducer from "./fake-data.js";

const rootReducer = combineReducers({
  form: formReducer,
  tags: tagsReducer,
});

export default rootReducer;
