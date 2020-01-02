import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND} from '../actions/friends_actions';

const friendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            debugger;
            return action.friends.data
        case RECEIVE_FRIEND:
            return Object.assign({}, oldState, {[action.friend.data._id]: action.friend.data})
        case REMOVE_FRIEND:
            delete newState[action.friendId];
            return newState;
        default:
            return oldState;
    }
}

export default friendsReducer;
