import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchFriends } from '../../actions/friends_actions';

const msp = state => {
    let userId = state.session.user ? state.session.user.id : null;
    return {
        userId,
        friends: Object.values(state.entities.friends)
    }
}

const mdp = dispatch => {
    return {
        fetchFriends: userId => dispatch(fetchFriends(userId))
    }
}

export default connect(msp, mdp)(FriendsIndex);