import { VIEW_ALERT, HIDE_ALERT } from "../types";

// state
const initialState = {
  alert: null,
};

export default function aler(state = initialState, action) {
  switch (action.type) {
    case VIEW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
}
