import { connect } from 'react-redux';
import { fetchFriend, editFriend, deleteFriend } from '../../actions/friends_actions';
import FriendShow from './friend_show';

const msp = (state, ownProps) => {
    debugger;
    return {
        friends: Object.values(state.entities.friends),
        friend: state.entities.friends[ownProps.match.params.friendId]
    }
}

const mdp = dispatch => {
    return {
        fetchFriend: friendId => dispatch(fetchFriend(friendId)),
        editFriend: friend => dispatch(editFriend(friend)),
        deleteFriend: friendId => dispatch(deleteFriend(friendId))
    }
}

export default connect(msp, mdp)(FriendShow);