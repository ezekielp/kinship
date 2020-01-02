import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Logo from '../landing_page/logo';
import './transition_screen.css';

class TransitionScreen extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.closeModal();
        }, 1500)
    }

	render() {
		const modal = this.props.modal;

		if (!modal) {
			return null;
        }

		return (
            <>
                <Logo />
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
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(msp, mdp)(TransitionScreen);
