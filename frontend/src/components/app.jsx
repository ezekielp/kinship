import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={LandingPage} />
    </Switch>
);

export default App;