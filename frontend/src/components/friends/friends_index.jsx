import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';
import FooterContainer from '../footer/footer_container';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchFriends(this.props.userId);
    }

    render() {
      const { friends, openModal, deleteFriend} = this.props;

      let loadingBoxes = [];
      for (let i = 0; i < 9; i++) {
        let loadingBox = (
          <li key={i} className="friends-index-loading-box" >
          </li>
        )
        loadingBoxes.push(loadingBox);
      }

      const friendProfileLis = friends.map((friend, idx) => {
        return <FriendsIndexItem
                  key={idx}
                  friend={friend}
                  openModal={openModal}
                  deleteFriend={deleteFriend}
                  className={`card-number-${idx}`}
                  />
      })

      let lisToRender;
      if (!friends[0]) {
        lisToRender = loadingBoxes;
      } else {
        lisToRender = friendProfileLis;
      };

        return (
          <div>
            <NavbarContainer />
            <div className="friends-below-navbar-container">
              <FriendsSidebar friends={this.props.friends} />
              <div className="friend-cards-container">
                <ul className = "friends-card-wrapper">
                  <li>
                    <div 
                    onClick={()=>this.props.openModal({type: "make-a-friend"})}
                    className="friend-card-outer-container friend-card-container friend-create-link-card">
                      <div className="friend-create-link-card-text">
                        Add a Friend
                      </div>
                      <div className="friend-create-link-card-plus-sign">+</div>
                    </div>
                  </li>
                  {lisToRender}
                </ul>
              </div>
            </div>
            <FooterContainer />
          </div>
        );
    }
}

export default FriendsIndex;