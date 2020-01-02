import {connect} from 'react-redux';
import SessionForm from'./session_form';
import {login, signup, clearErrors} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state) => {
  return {
    isAuthenticated: state.session.isAuthenticated,
    errors: Object.values(state.errors.session),
    state: state
  }
}

const mdp = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal)=> dispatch(openModal(modal))
  }
}

export default connect(msp, mdp)(SessionForm);
