import React from 'react';
import './friends.css';

class FriendsSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderUpcomingBirthdays() {
        
    }

    render() {


        return (
            <div className="friends-sidebar-container">
                <h2 className="friends-sidebar-header">Dashboard</h2>
                <h3 className="friends-sidebar-birthdays-header">Upcoming birthdays</h3>
            </div>
        )
    }
}

export default FriendsSidebar;