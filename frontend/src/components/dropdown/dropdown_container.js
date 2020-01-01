import { connect } from "react-redux";
import { hideDropdown, showDropdown } from "../../actions/dropdown_actions";
import Dropdown from "./dropdown";

const msp = state => ({
  dropdown: state.ui.dropdown
});

const mdp = dispatch => ({
  hideDropdown: () => dispatch(hideDropdown()),
  showDropdown: dropdown => dispatch(showDropdown(dropdown))
});

export default connect(msp, mdp)(Dropdown);
