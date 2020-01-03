import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Navbar from './navbar';

const msp = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        email: state.session.user.email
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(Navbar);