import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import './make_friend.css';

class MakeAFriend extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const modal = this.props.modal;

		if (!modal) {
			return null;
		}

		return (
            <div>
                <button className="close-make-friend-button" onClick={()=>this.props.closeModal()}>Close Modal</button>
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
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(msp, mdp)(MakeAFriend);
