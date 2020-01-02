import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchFriends(this.props.userId);
    }

    render() {
      const { friends, openModal, deleteFriend} = this.props;

      if (!friends) return null;

      const friendProfileLis = friends.map((friend, idx) => {
        return <FriendsIndexItem
                  key={idx}
                  friend={friend}
                  openModal={openModal}
                  deleteFriend={deleteFriend}
                  className={`card-number-${idx}`}
                  />
      })

        return (
          <div>
            <NavbarContainer />
            <div className="friends-below-navbar-container">
              <FriendsSidebar friends={this.props.friends} />
              <div className="friend-cards-container">
                <ul>
                  {friendProfileLis}
                  <li>
                    <div 
                    onClick={()=>this.props.openModal({type: "make-a-friend"})}
                    className="friend-card-container friend-create-link-card">
                      <div className="friend-create-link-card-text">
                        Add a Friend
                      </div>
                      <div className="friend-create-link-card-plus-sign">+</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default FriendsIndex;