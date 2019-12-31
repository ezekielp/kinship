import {connect} from 'react-redux';
import SessionForm from'./session_form';
import {login, signup} from '../../actions/session_actions';

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
    signup: (user) => dispatch(signup(user))
  }
}

export default connect(msp, mdp)(SessionForm);
