import React from 'react';

const FriendsIndexItem = ({friend}) => {

    const ageFromDOB = DOB => {
      const yearsOldInMilliseconds = Date.now() - DOB.getTime();
      const yearsOldInSeconds = yearsOldInMilliseconds / 1000;
      const yearsOldInMinutes = yearsOldInSeconds / 60;
      const yearsOldInHours = yearsOldInMinutes / 60;
      const yearsOldInDays = yearsOldInHours / 24;
      return Math.floor(yearsOldInDays / 365);
    }

    let ageLi = <></>;
    if (friend.dateOfBirth) {
      ageLi = <li><span>{ageFromDOB}</span>years old</li>
    }

    let currentCityLi = <></>;
    if (friend.currentCity) {
      currentCityLi = <li>Lives in <span>{friend.currentCity}</span></li>
    }

    const summaryInfo = (
      <li></li>
    )

    return (
      <div className="friend-card-container">
        <ul>
          <li>{friend.name}</li>
          <li>Age</li>
          <li>Birthday</li>
          <li>Where [Name] lives</li>
        </ul>
      </div>
    );
}

export default FriendsIndexItem;