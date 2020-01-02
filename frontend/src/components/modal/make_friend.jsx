import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import './make_friend.css';
import CreateFriendContainer from '../friends/create_friend_container';
import closeImage from '../../images/delete-button.png';

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
				<div className="header"></div>
				<CreateFriendContainer/>
                {/* <button className="close-make-friend-button" onClick={()=>this.props.closeModal()}>Close Modal</button> */}
				<button className="close-make-friend-button" onClick={() => this.props.closeModal()}><img className="close-image" src={closeImage} alt=""/></button>
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
