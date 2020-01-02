import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import './make_friend.css';
import CreateFriendContainer from '../friends/create_friend_container';
import EditFriendContainer from '../friends/edit_friend_container';

class MakeAFriend extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { modal, formType, friendId } = this.props;
		if (!modal) {
			return null;
		}
		const formComp = formType === "Create" ? <CreateFriendContainer /> : <EditFriendContainer friendId={friendId} />
		return (
			<div>
				<div className="header">{formType === "Create" ? "Make Friend" : "Edit Friend"}</div>
				{formComp}
				<button className="close-make-friend-button" onClick={() => this.props.closeModal()}>
					<i className="fas fa-times close-image"></i>
				</button>
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
