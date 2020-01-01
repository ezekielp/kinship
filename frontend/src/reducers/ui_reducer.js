import { combineReducers } from "redux";
import dropdownReducer from "./dropdown_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  dropdown: dropdownReducer,
  modal: modalReducer
});

export default uiReducer;
