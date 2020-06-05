import { SEARCH_BOOKS } from "../actions/index";
import { EMPTY_BOOKS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      return [action.payload.data];
    case EMPTY_BOOKS:
      return [action.payload.data];
    default:
      return state;
  }
}
