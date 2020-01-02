import React from 'react';
import { Link } from 'react-router-dom';
import { limitChars } from '../../util/text_util';

const FriendsIndexItem = ({friend, openModal, deleteFriend}) => {

    const ageFromDOB = DOB => {
      const yearsOldInMilliseconds = Date.now() - DOB.getTime();
      const yearsOldInSeconds = yearsOldInMilliseconds / 1000;
      const yearsOldInMinutes = yearsOldInSeconds / 60;
      const yearsOldInHours = yearsOldInMinutes / 60;
      const yearsOldInDays = yearsOldInHours / 24;
      return Math.floor(yearsOldInDays / 365);
    }

    let ageLi = <div></div>;
    if (friend.dateOfBirth) {
      ageLi = (
        <li className="friend-show-li">
          <div className="friend-show-tag friend-show-age-tag">age</div>
          <div className="friend-show-text">
            {ageFromDOB(new Date(friend.dateOfBirth))} years old
          </div>
        </li>
      );
    }

    let birthdayLi = <></>;
    if (friend.dateOfBirth) {
      const { dateOfBirth } = friend;
      const DOB = new Date(dateOfBirth);
      const dateOptions = { month: "long" };
      const birthMonth = new Intl.DateTimeFormat("en-US", dateOptions).format(
        DOB
      );
      const birthDay = DOB.getUTCDate();
      const birthYear = DOB.getUTCFullYear();

      birthdayLi = (
        <li className="friend-show-li">
          <div className="friend-show-div">
            <span className="friend-show-tag friend-show-birthday-tag">
              birthday
            </span>
          </div>
          <div className="friend-show-text">
            {birthMonth} {birthDay}, {birthYear}
          </div>
        </li>
      );
    }    

    let currentCityLi = <></>;
    if (friend.currentCity) {
      currentCityLi = (
        <li className="friend-show-li">
          <div className="friend-show-tag friend-show-location-tag">
            location
          </div>
          <div className="friend-show-text">
            <span>{friend.currentCity}</span>
          </div>
        </li>
      );
    }

    const summaryInfo = (
      <li></li>
    )

    return (
      <div className="friend-card-outer-container">
        <Link to={`/friends/${friend._id}`}>
          <div className="friend-card-container">
            <ul>
              <li className="friend-index-item-header">
                <p className="friend-index-item-name">{limitChars(friend.name, 15)}</p>
                <i className="fas fa-edit"
                  onClick={(e) => {
                  e.preventDefault();
                  openModal({type: 'edit-a-friend', friendId: friend._id});
                }}></i>
                <i className="fas fa-times"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteFriend(friend._id);
                }}></i>
              </li>
              {ageLi}
              {birthdayLi}
              {currentCityLi}
            </ul>
            <div className="friend-card-click-for-details">
              click for more details
            </div>
          </div>
        </Link>
      </div>
    );
}

export default FriendsIndexItem;