import { SEND_TAGS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case SEND_TAGS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
