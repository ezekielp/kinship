import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import FriendsIndex from './friends/friends_index';
import CreateFriendContainer from './friends/create_friend_container';
import EditFriendContainer from './friends/edit_friend_container';

const App = () => ( 
    <Switch>

        <Route path="/friends/:friendId/edit" component = {EditFriendContainer} />
        <Route path="/friends/new" component = {CreateFriendContainer} />
        <Route exact path="/friends" component={FriendsIndex} />
        {/* <ProtectedRoute exact path="/friends" component={FriendsIndex} /> */}
        <AuthRoute path="/" component={LandingPage} />
    </Switch>
);

export default App;