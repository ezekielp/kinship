import React from 'react';
import './friends.css';

class FriendsSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.renderUpcomingBirthdays = this.renderUpcomingBirthdays.bind(this);
        this.birthdayWithinOneMonth = this.birthdayWithinOneMonth.bind(this);
        this.parseBirthday = this.parseBirthday.bind(this);
    }

    birthdayWithinOneMonth(DOB) {
        const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000;
        const today = new Date();
        const oneMonthFromNow = new Date(today.getTime() + oneMonthInMilliseconds);
        const birthday = new Date(DOB);
        
        const currentMonth = today.getMonth();
        const currentDate = today.getDate();
        const nextMonth = oneMonthFromNow.getMonth();
        const birthdayMonth = birthday.getMonth();
        const birthdayDate = birthday.getDate();

        if (birthdayMonth === currentMonth) {
            return true;
        } else if ((birthdayMonth === nextMonth) && (birthdayDate <= currentDate)) {
            return true;
        }
        return false;
    }

    parseBirthday(friend) {
        const { dateOfBirth } = friend;
        const DOB = new Date(dateOfBirth);
        const dateOptions = { month: "long" };
        const birthMonth = new Intl.DateTimeFormat(
            "en-US",
            dateOptions
        ).format(DOB);
        const birthDay = DOB.getUTCDate();
        return `${birthMonth} ${birthDay}`;
    }

    renderUpcomingBirthdays() {
        const { friends } = this.props;
        const friendsToRender = friends.filter(friend => this.birthdayWithinOneMonth(friend.dateOfBirth));
        
        const friendBirthdayLis = friendsToRender.map((friend, idx) => {
            return (
                <li key={idx} 
                    className={`friends-sidebar-birthdays-item ${idx%2 === 0 ? "friends-sidebar-item-white" : "friends-sidebar-item-orange"}`}>
                    <div>{friend.name}</div>
                    <div>{this.parseBirthday(friend)}</div>
                </li>
            )
        })

        return (
            <ul>
                {friendBirthdayLis}
            </ul>
        )
    }

    render() {

        return (
            <div className="friends-sidebar-container">
                <h2 className="friends-sidebar-header">Dashboard</h2>
                <div className="friends-sidebar-birthdays-container">
                    <h3 className="friends-sidebar-birthdays-header">Upcoming birthdays</h3>
                    {this.renderUpcomingBirthdays()}
                </div>
            </div>
        )
    }
}

export default FriendsSidebar;