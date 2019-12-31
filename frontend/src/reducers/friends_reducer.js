import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND} from '../actions/friends_actions';

const friendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldstate);
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends
        case RECEIVE_FRIEND:
            return Object.assign({}, oldsate, {[action.friend.id]: action.friend})
        case REMOVE_FRIEND:
            delete newState[action.friendId] 
            return newState;
        default:
            return oldState;
    }
}

export default friendsReducer;