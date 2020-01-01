import * as FRIENDAPIUtil from '../util/friends_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";


const receiveAllFriends = (friends) => {
    return {
        type: RECEIVE_ALL_FRIENDS,
        friends
    }
}

const receiveFriend = (friend) => {
    return {
        type: RECEIVE_FRIEND,
        friend
    }
}

const removeFriend = (friendId) => {
    return {
        type: REMOVE_FRIEND,
        friendId
    }
}

export const fetchFriends = (id) => (dispatch) => {
    return FRIENDAPIUtil.fetchFriends(id)
        .then(friends => dispatch(receiveAllFriends(friends)))
        .catch(err => console.log(err))
}

export const fetchFriend = (id) => (dispatch) => {
    return FRIENDAPIUtil.fetchFriend(id)
        .then(friend => dispatch(receiveFriend(friend)))
        .catch(err => console.log(err))
}

export const makeFriend = (data) => (dispatch) => {
    return FRIENDAPIUtil.createFriend(data)
        .then(friend => dispatch(receiveFriend(friend)))
        .catch(err => console.log(err))
}

export const editFriend = (data) => (dispatch) => {
    debugger
    return FRIENDAPIUtil.updateFriend(data)
        .then(friend => dispatch(receiveFriend(friend)))
        .catch(err => console.log(err))
}

export const deleteFriend = (id) => (dispatch) => {
    return FRIENDAPIUtil.deleteFriend(id)
        .then(() => dispatch(removeFriend(id)))
        .catch(err => console.log(err))
}
