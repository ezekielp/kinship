import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchFriends, makeFriend, fetchFriend, editFriend, deleteFriend } from './actions/friends_actions';
import {signup, login} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);

        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = {
            session: {
                isAuthenticated: true,
                user: decodedUser
            }
        };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }
    } else {
        store = configureStore({});
    }


    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);

    window.store = store;
    window.fetchFriends = fetchFriends;
    window.fetchFriend = fetchFriend;
    window.login = login;
    window.signup = signup;
    window.makeFriend = makeFriend;
    window.editFriend = editFriend;
    window.deleteFriend = deleteFriend;

});