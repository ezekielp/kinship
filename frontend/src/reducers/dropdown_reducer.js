import { SHOW_DROPDOWN, HIDE_DROPDOWN } from "../actions/dropdown_actions";

const dropdownReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SHOW_DROPDOWN:
      return action.dropdown;
    case HIDE_DROPDOWN:
      return {};
    default:
      return state;
  }
};

export default dropdownReducer;
