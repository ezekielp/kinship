import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import Logo from '../landing_page/logo';
import './logout_confirmation.css';


class LogoutConfirmation extends React.Component {

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
              <div className="logout-logo-container"><Logo /></div>
              <span>Are you sure you want to logout?</span>
              <div className="logout-button-container">
                <button onClick={this.props.closeModal}>No</button>
                <button onClick={this.handleLogout}>Yes</button>
              </div>
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

export default connect(msp, mdp)(LogoutConfirmation);
