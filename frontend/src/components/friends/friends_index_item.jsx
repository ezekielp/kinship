import React from 'react';
import { Link } from 'react-router-dom';
import { limitChars, monthNames } from '../../util/text_util';

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
        // <li className="friend-index-item-li">
          // <>
          <div className="friend-index-item-grid">
            <div className="friend-show-div">
              <span className="friend-show-tag friend-show-age-tag">age</span>
            </div>
            <div className="friend-show-text">
              {ageFromDOB(new Date(friend.dateOfBirth))} years old
            </div>
          </div>
          // </>
        // </li>
      );
    }

    let birthdayLi = <></>;
    
    if (friend.dateOfBirth) {
      const { dateOfBirth } = friend;
      const DOB = new Date(dateOfBirth);
      const dateOptions = { month: "long" };
      const birthMonth = monthNames[DOB.getUTCMonth()];
      const birthDay = DOB.getUTCDate();
      const birthYear = DOB.getUTCFullYear();

      birthdayLi = (
        // <li className="friend-index-item-li">
          // <>
          <div className="friend-index-item-grid">
            <div className="friend-show-div">
            {/* <div className="friend-show-div"> */}
              <span className="friend-show-tag friend-show-birthday-tag">
                birthday
              </span>
            </div>
            <div className="friend-show-text">
            {/* <div className="friend-show-text"> */}
              {birthMonth} {birthDay}, {birthYear}
            </div>
          </div>
          // </>
        // </li>
      );
    }    

    let currentCityLi = <></>;
    if (friend.currentCity) {
      currentCityLi = (
        // <li className="friend-index-item-li">
        <div className="friend-index-item-grid">
          <div className="friend-show-div">
            <span className="friend-show-tag friend-show-location-tag">
              location
            </span>
          </div>
          <div className="friend-show-text">
            {friend.currentCity}
          </div>
        </div>
        // </li>
      );
    }

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
              {/* <div className="friend-index-item-grid"> */}
                  {ageLi}
                  {birthdayLi}
                  {currentCityLi}
                  {/* <div className="friend-show-div index-location-tag">
                    <span className="friend-show-tag friend-show-location-tag">
                      location
                    </span>
                  </div>
                  <div className="friend-show-text index-location-text">
                    {friend.currentCity}
                  </div> */}
              {/* </div> */}
              {/* {ageLi}
              {birthdayLi}
              {currentCityLi} */}
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