import { SEARCH_BOOK } from "../actions/index";

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return action.payload.data;
    default:
      return state;
  }
}
