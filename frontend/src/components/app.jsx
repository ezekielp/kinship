import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import FriendsIndex from './friends/friends_index';
import FriendShowContainer from './friends/friend_show_container';

const App = () => (
    <Switch>
        <Route exact path="/friends" component={FriendsIndex} />
        {/* <ProtectedRoute exact path="/friends" component={FriendsIndex} /> */}
        <Route exact path="/friends/dummy_show" component={FriendShowContainer} />
        <AuthRoute path="/" component={LandingPage} />
    </Switch>
);

export default App;