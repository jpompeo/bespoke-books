import { SEARCH_BOOKS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      return [...state, action.payload.data];
    default:
      return state;
  }
}
