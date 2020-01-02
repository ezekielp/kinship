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
        <li>
          <span>{ageFromDOB(new Date(friend.dateOfBirth))}</span>years old
        </li>
      );
    }

    let currentCityLi = <div></div>;
    if (friend.currentCity) {
      currentCityLi = <li>Lives in <span>{friend.currentCity}</span></li>
    }

    const summaryInfo = (
      <li></li>
    )

    return (
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
            {currentCityLi}
          </ul>
        </div>
      </Link>
    );
}

export default FriendsIndexItem;