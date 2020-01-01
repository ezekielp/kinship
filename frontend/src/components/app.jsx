import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import FriendsIndex from './friends/friends_index';
import CreateEditForm from './friends/create_and_edit_form';

const App = () => (
    <Switch>
        <Route path="/friends/new" component = {CreateEditForm} />
        <Route exact path="/friends" component={FriendsIndex} />
        {/* <ProtectedRoute exact path="/friends" component={FriendsIndex} /> */}
        <AuthRoute path="/" component={LandingPage} />
    </Switch>
);

export default App;