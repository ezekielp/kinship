import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';

class FriendShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                <div className="friends-below-navbar-container">
                    <FriendsSidebar />
                    <div className="friend-show-container">
                        <ul>
                            <li id="friend-show-name-text">[ Name ]</li>
                            <li>Age:</li>
                            <li>Gender:</li>
                            <li>Birthday:</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendShow;