import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import FriendsIndexContainer from './friends/friends_index_container';
import FriendShowContainer from './friends/friend_show_container';
import Modal from './modal/modal';

const App = () => (
  <>
    <Modal />
    <Switch>
      <ProtectedRoute
        exact
        path="/friends/:friendId"
        component={FriendShowContainer}
      />
      <ProtectedRoute exact path="/friends" component={FriendsIndexContainer} />
      <AuthRoute path="/" component={LandingPage} />
    </Switch>
  </>
);

export default App;