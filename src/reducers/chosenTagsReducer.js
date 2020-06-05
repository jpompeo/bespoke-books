import { SEND_TAGS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case SEND_TAGS:
      const isPresent = state.includes(action.payload);
      if (!isPresent) {
        return [action.payload, ...state];
      } else {
        const index = state.indexOf(action.payload);
        return state.filter(tag => {
          return tag !== action.payload;
        })
      }
    default:
      return state;
  }
}
