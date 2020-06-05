import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { tagsReducer, recommendations } from "./fake-data.js";
import booksReducer from "./books-reducer";
import chosenTagsReducer from "./chosenTagsReducer";

const rootReducer = combineReducers({
  form: formReducer,
  tags: tagsReducer,
  books: booksReducer,
  chosenTags: chosenTagsReducer,
  recommendations: recommendations,
});

export default rootReducer;
