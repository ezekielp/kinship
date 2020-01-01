import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';

class FriendShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderAge = this.renderAge.bind(this);
        this.renderCurrentCity = this.renderCurrentCity.bind(this);
        this.renderSiblings = this.renderSiblings.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriend(this.props.match.params.friendId);
    }

    renderAge() {
        const { friend } = this.props;

        let ageFromDOB = DOB => {
          const yearsOldInMilliseconds = Date.now() - DOB.getTime();
          const yearsOldInSeconds = yearsOldInMilliseconds / 1000;
          const yearsOldInMinutes = yearsOldInSeconds / 60;
          const yearsOldInHours = yearsOldInMinutes / 60;
          const yearsOldInDays = yearsOldInHours / 24;
          return Math.floor(yearsOldInDays / 365);
        };

        let ageLi = <></>;
        if (friend.dateOfBirth) {
          ageLi = (
            <li>
                <span className="friend-show-age-tag">age</span>
              <span>{ageFromDOB(new Date(friend.dateOfBirth))}</span> years old
            </li>
          );
        }
        return ageLi;        
    }

    renderCurrentCity() {
        const { friend } = this.props;

        let currentCityYears = <></>;
        if (friend.currentCityYears) {
          const getYearFromCurrentCityYears = numYears => {
            const currentDate = new Date();
            return currentDate.getUTCFullYear() - numYears;
          };
          currentCityYears = (
            <span>
              (since around{" "}
              {getYearFromCurrentCityYears(friend.currentCityYears)})
            </span>
          );
        }

        let currentCityLi = <></>;
        if (friend.currentCity) {
          currentCityLi = (
            <li>
              <span className="friend-show-location-tag">location</span>
              Lives in <span>{friend.currentCity} </span>
              {currentCityYears}
            </li>
          );
        }
        
        return currentCityLi;
    }

    renderSiblings() {
        const { friend } = this.props;

        let siblingsLi = <></>;
        if (friend.siblings) {
            let { siblings } = friend;
            let siblingsText;
            if (siblings.length === 1) {
                siblingsText = siblings;
            } else if (siblings.length === 2) {
                siblingsText = siblings.join(" and ");
            } else {
                siblingsText = siblings.slice(0, siblings.length - 1).join(", ") + " and " + siblings[siblings.length - 1];
            }
            siblingsLi = (
              <li>
                <span className="friend-show-siblings-tag">siblings</span>
                Has siblings{" "}
                <span className="friend-show-siblings-text">
                  {siblingsText}
                </span>
              </li>
            );
        }
        return siblingsLi;
    }

    render() {

        if (!this.props.friend) return null;

        const { friend } = this.props;
        
        return (
          <div>
            <NavbarContainer />
            <div className="friends-below-navbar-container">
              <FriendsSidebar />
              <div className="friend-show-container">
                <ul>
                  <li id="friend-show-name-text">{friend.name}</li>
                  {this.renderAge()}
                  {this.renderCurrentCity()}
                  {this.renderSiblings()}
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default FriendShow;