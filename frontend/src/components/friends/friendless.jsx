import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Friendless extends React.Component {

    render() {

        const {friends} = this.props;
        
        return (
          <div>
            <NavbarContainer />
            <div className="friends-below-navbar-container">
              <FriendsSidebar friends={friends} />
              <div className="friendless-container">
                <div className="friendless-text">No friends found!</div>
              </div>
            </div>
          </div>
        );
    }
}

const msp = (state, ownProps) => {
    return {
        friends: Object.values(state.entities.friends)
    };
};

export default connect(msp, null)(withRouter(Friendless));