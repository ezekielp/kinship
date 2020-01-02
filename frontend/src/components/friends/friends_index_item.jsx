import React from 'react';
import { Link } from 'react-router-dom';

const FriendsIndexItem = ({friend}) => {

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
            <li className="friend-index-item-buttons">
              <i className="fas fa-edit"></i>
              <i className="fas fa-times"></i>
            </li>
            <li className="friend-index-item-name">{friend.name}</li>
            {ageLi}
            {currentCityLi}
          </ul>
        </div>
      </Link>
    );
}

export default FriendsIndexItem;