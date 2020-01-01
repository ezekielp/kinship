import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //   this.props.fetchFriends();
    // }

    render() {
      // const { friends } = this.props;

      // if (!friends) return null;

      // const friendProfileLis = friends.map((friend, idx) => {
      //   return <FriendsIndexItem
      //             key={idx}
      //             friend={friend}
      //             />
      // })

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
                <div className="friend-card-container friend-create-link-card">
                  <div className="friend-create-link-card-text">
                    Add a Friend
                  </div>
                  <div className="friend-create-link-card-plus-sign">+</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FriendsIndex;