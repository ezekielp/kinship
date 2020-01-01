import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import MakeAFriend from './make_friend';

class Modal extends React.Component {

	render() {
		const { modal, openModal, closeModal, postId } = this.props;

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
		
		switch (modal) {
			case 'make-a-friend':
				component = <MakeAFriend />;
				background = 'make-a-friend-background';
                container = 'make-a-friend-container';
                clickEffect = doNothing;
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
