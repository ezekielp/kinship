import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import FriendsIndex from './friends/friends_index';

const App = () => (
    <Switch>
        <ProtectedRoute exact path="/friends" component={FriendsIndex} />
        <AuthRoute path="/" component={LandingPage} />
    </Switch>
);

export default App;