import { SEND_TAGS } from "../actions/index";

export default function (state = "", action) {
  switch (action.type) {
    case SEND_TAGS:
      alert(action.payload);
      return action.payload;
    default:
      return state;
  }
}
