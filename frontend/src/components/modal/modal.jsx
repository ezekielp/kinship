import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import MakeAFriend from './make_friend';
import TransitionScreen from './transition_screen';
import LogoutConfirmation from './logout_confirmation';
import About from './about';

class Modal extends React.Component {

	render() {
		const { modal, openModal, closeModal } = this.props;

		if (!modal) { //! checks if UI state is null
			return null;
		}

		let component;
		let background;
		let container;
		let clickEffect;

		const doNothing = ()=>{};

		const transitionModals = (transitionType)=>{
			closeModal();
			openModal(transitionType);
			setTimeout(closeModal, 500);
		}
		
		switch (modal.type) {
			case 'make-a-friend':
				component = <MakeAFriend formType="Create"/>;
				background = 'make-a-friend-background';
				container = 'make-a-friend-container';
				clickEffect = doNothing;
				break;
			case 'edit-a-friend':
				component = <MakeAFriend closeModal={this.props.closeModal} formType="Edit" friendId={modal.friendId}/>;
				background = 'make-a-friend-background';
				container = 'make-a-friend-container';
				clickEffect = doNothing;
				break;
			case 'transition-screen':
				component = <TransitionScreen />;
				background = 'transition-screen-background';
				container = 'transition-screen-container';
				clickEffect = doNothing;
				break;
			case 'logout-confirmation':
				component = <LogoutConfirmation />;
				background = 'logout-confirmation-background';
				container = 'logout-confirmation-container';
				clickEffect = doNothing;
				break;
			case 'about':
				component = <About />;
				background = 'about-page-background';
				container = 'about-page-container';
				clickEffect = closeModal;
				break;
			default:
				return null;
		}

		return (
			<div className={background} onClick={clickEffect}>
				<div className={container} onClick={(e) => e.stopPropagation()}>
					{component}
				</div>
			</div>
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
		openModal: (modal) => dispatch(openModal(modal)),
		closeModal: () => dispatch(closeModal())
	}
};

export default connect(msp, mdp)(Modal);
