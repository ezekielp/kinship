import { connect } from 'react-redux';
import { fetchFriend, deleteFriend } from '../../actions/friends_actions';
import FriendShow from './friend_show';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    return {
        friends: Object.values(state.entities.friends),
        friend: state.entities.friends[ownProps.match.params.friendId]
    };
};

const mdp = dispatch => {
    return {
      fetchFriend: friendId => dispatch(fetchFriend(friendId)),
      deleteFriend: friendId => dispatch(deleteFriend(friendId)),
      openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(msp, mdp)(FriendShow);