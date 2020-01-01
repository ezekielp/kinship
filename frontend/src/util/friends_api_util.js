import axios from 'axios';

/*
axios requests to friends for:

1. fetchFriends
2. fetchFriend
3. createFriend
4. updateFriend
5. deleteFriend
*/


export const fetchFriends = (id) => {
    return axios.get(`/api/friends/user/${id}`)
}

export const fetchFriend = (id) => {
    return axios.get(`/api/friends/${id}`)
}

export const createFriend = (data) => {
    return axios.post('/api/friends', data)
}

export const updateFriend = (data) => {
    debugger;
    return axios.patch(`/api/friends/${data._id}`, data)
}

export const deleteFriend = (id) => {
    return axios.delete(`/api/friends/${id}`)
}


