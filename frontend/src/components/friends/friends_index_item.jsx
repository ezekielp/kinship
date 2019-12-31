import React from 'react';

const FriendsIndexItem = (props) => {
    return (
      <div className="friend-card-container">
        {/* I guess here we should always have NAME, but then we just map the first however-many (5?) info fields associated with a friend profile? */}
        <ul>
          <li>Name</li>
          <li>Age</li>
          <li>Birthday</li>
          <li>Where [Name] lives</li>
        </ul>
      </div>
    );
}

export default FriendsIndexItem;