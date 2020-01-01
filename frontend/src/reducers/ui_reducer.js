import { combineReducers } from "redux";
import dropdownReducer from "./dropdown_reducer";

const uiReducer = combineReducers({
  dropdown: dropdownReducer
});

export default uiReducer;
