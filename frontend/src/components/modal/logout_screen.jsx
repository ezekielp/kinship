import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Logo from '../landing_page/logo';

class TransitionScreen extends React.Component {

  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.closeModal();
    this.props.logout();
  }

	render() {
		const modal = this.props.modal;

		if (!modal) {
			return null;
    }

		return (
            <>
                <Logo />
                <span>Are you sure you want to logout?</span>
                <button onClick={this.handleLogout}>Yes</button>
                <button onClick={this.props.closeModal}>No</button>
            </>
		);
	}
}

const msp = (state) => {
	return {
		modal: state.ui.modal
	};
};

const mdp = (dispatch) => {
	return {
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
	};
};

export default connect(msp, mdp)(TransitionScreen);
