import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div>
                <NavbarContainer />
                <div className="friends-below-navbar-container">
                    <FriendsSidebar />
                    <div className="friend-cards-container">
                        <FriendsIndexItem />
                        <FriendsIndexItem />
                        <FriendsIndexItem />
                        <FriendsIndexItem />
                        <FriendsIndexItem />
                        <FriendsIndexItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendsIndex;