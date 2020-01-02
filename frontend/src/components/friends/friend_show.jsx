import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';

class FriendShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderAge = this.renderAge.bind(this);
        this.renderBirthday = this.renderBirthday.bind(this);
        this.renderCurrentCity = this.renderCurrentCity.bind(this);
        this.renderHometown = this.renderHometown.bind(this);
        this.renderHobbies = this.renderHobbies.bind(this);
        this.renderSiblings = this.renderSiblings.bind(this);
        this.renderParents = this.renderParents.bind(this);
        this.renderPets = this.renderPets.bind(this);
        this.renderFamily = this.renderFamily.bind(this);
        this.renderNotes = this.renderNotes.bind(this);        
        this.renderUndergradSchool = this.renderUndergradSchool.bind(this);
        this.renderGradSchool = this.renderGradSchool.bind(this);        
        this.renderEducation = this.renderEducation.bind(this);        
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
            <li className="friend-show-li">
              <div className="friend-show-tag friend-show-age-tag">age</div>
              <div className="friend-show-text">
                {ageFromDOB(new Date(friend.dateOfBirth))} years old
              </div>
            </li>
          );
        }
        return ageLi;        
    }

    renderBirthday() {
      const { friend } = this.props;

      let birthdayLi = <></>;
      if (friend.dateOfBirth) {
        const { dateOfBirth } = friend;
        const DOB = new Date(dateOfBirth);
        const dateOptions = { month: 'long' };
        const birthMonth = new Intl.DateTimeFormat('en-US', dateOptions).format(DOB);
        const birthDay = DOB.getUTCDate();
        const birthYear = DOB.getUTCFullYear();

        birthdayLi = (
          <li className="friend-show-li">
            <div className="friend-show-tag friend-show-birthday-tag">birthday</div>
            <div className="friend-show-text">
              {birthMonth} {birthDay}, {birthYear}
            </div>
          </li>
        );
      }

      return birthdayLi;
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
            <li className="friend-show-li">
              <div className="friend-show-tag friend-show-location-tag">location</div>
              <div className="friend-show-text">Lives in <span>{friend.currentCity} </span>
              {currentCityYears}</div>
            </li>
          );
        }
        
        return currentCityLi;
    }

    renderHometown() {
      const { friend } = this.props;

      let pastCityText;
      let pastCityLi = <></>;

      if (friend.pastCity && friend.pastCity !== "") {
        const { pastCity } = friend;
        if (friend.pastCityYears) {
          pastCityText = `Lived in ${pastCity} for ${friend.pastCityYears} years`;
        } else {
          pastCityText = pastCity;
        }
        pastCityLi = (
          <>
            <li className="friend-show-li">
              <div className="friend-show-div">
                <span className="friend-show-pastcity-tag friend-show-tag">
                  hometown
                </span>
              </div>
              <div className="friend-show-text">{pastCityText}</div>
            </li>
          </>
        );
      }

      return pastCityLi;        
    }

    renderSiblings() {
        const { friend } = this.props;

        let siblingsLi = <></>;
        if (friend.siblings[0] !== "") {
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
              <li className="friend-show-li">
                <div className="friend-show-siblings-tag friend-show-tag">
                  siblings
                </div>
                <div className="friend-show-text">{siblingsText}</div>
              </li>
            );
        }
        return siblingsLi;
    }

    renderParents() {
        const { friend } = this.props;

        let parentsLi = <></>;
        if (friend.parents[0] !== "") {
          let { parents } = friend;
          let parentsText;
          if (parents.length === 1) {
            parentsText = parents;
          } else if (parents.length === 2) {
            parentsText = parents.join(" and ");
          } else {
            parentsText =
              parents.slice(0, parents.length - 1).join(", ") +
              " and " +
              parents[parents.length - 1];
          }
          parentsLi = (
            <li className="friend-show-li">
              <div className="friend-show-parents-tag friend-show-tag">
                parents
              </div>
              <div className="friend-show-text">{parentsText}</div>
            </li>
          );
        }
        return parentsLi;
    }

    renderPets() {
        const { friend } = this.props;

        let petsLi = <></>;
        if (friend.pets[0] !== "") {
          let { pets } = friend;
          let petsText;
          if (pets.length === 1) {
            petsText = pets;
          } else if (pets.length === 2) {
            petsText = pets.join(" and ");
          } else {
            petsText =
              pets.slice(0, pets.length - 1).join(", ") +
              " and " +
              pets[pets.length - 1];
          }
          petsLi = (
            <li className="friend-show-li">
              <div className="friend-show-pets-tag friend-show-tag">
                pets
              </div>
              <div className="friend-show-text">{petsText}</div>
            </li>
          );
        }
        return petsLi;
    }

    renderFamily() {
      const { friend } = this.props;

      let dividerOrNot = <></>;
      let familyHeader = <></>
      if ((friend.parents[0] !== "") || (friend.pets[0] !== "") || (friend.siblings[0] !== "")) {
        dividerOrNot = <hr className="friend-show-divider-line" />;
        familyHeader = <h4 className="friend-show-header">Family</h4>
      }

      return (
        <>
          {dividerOrNot}
          {familyHeader}
          {this.renderPets()}
          {this.renderSiblings()}
          {this.renderParents()}
        </>
      )
    }

    renderUndergradSchool() {
      const { friend } = this.props;
      
      let undergradSchoolLi = <></>;
      if (friend.undergradSchool && (friend.undergradSchool !== "")) {
        const { undergradSchool } = friend;
        undergradSchoolLi = (
          <>
            <li className="friend-show-li">
              <div className="friend-show-div">
                <span className="friend-show-undergradSchool-tag friend-show-tag">
                  undergrad
                </span>
              </div>
              <div className="friend-show-text">{undergradSchool}</div>
            </li>
          </>
        );
      }

      return undergradSchoolLi;      
    }

    renderGradSchool() {
      const { friend } = this.props;

      let gradSchoolLi = <></>;
      if (friend.gradSchool && (friend.gradSchool !== "")) {
        const { gradSchool } = friend;
        gradSchoolLi = (
          <>
            <li className="friend-show-li">
              <div className="friend-show-div">
                <span className="friend-show-gradSchool-tag friend-show-tag">
                  graduate
                </span>
              </div>
              <div className="friend-show-text">{gradSchool}</div>
            </li>
          </>
        );
      }

      return gradSchoolLi;      
    }

    renderEducation() {
      const { friend } = this.props;

      let dividerOrNot = <></>;
      let educationHeader = <></>;
      if (
        friend.undergradSchool !== "" ||
        friend.gradSchool !== ""
      ) {
        dividerOrNot = <hr className="friend-show-divider-line" />;
        educationHeader = <h4 className="friend-show-header">Education</h4>;
      }

      return (
        <>
          {dividerOrNot}
          {educationHeader}
          {this.renderUndergradSchool()}
          {this.renderGradSchool()}
        </>
      );
    }

    renderHobbies() {
      const { friend } = this.props;

      let hobbiesLi = <></>;
      if (friend.hobbies[0] !== "") {
        const { hobbies } = friend;
        const hobbiesText = hobbies
          .map(hobby => {
            return (
              hobby.slice(0, 1).toUpperCase() + hobby.slice(1).toLowerCase()
            );
          })
          .join("  |  ");
        hobbiesLi = (
          <>
            <hr className="friend-show-divider-line"/>
            <li className="friend-show-li">
              <div className="friend-show-hobbies-tag friend-show-tag">
                hobbies
              </div>
              <div className="friend-show-text">{hobbiesText}</div>
            </li>
          </>
        );
      }

      return hobbiesLi;
    }

    renderNotes() {
      const { friend } = this.props;

      let notesLi = <></>;
      if (friend.notes !== "") {
        const { notes } = friend;
        notesLi = (
          <>
            <hr className="friend-show-divider-line" />
            <li className="friend-show-li">
              <div className="friend-show-div">
                <span className="friend-show-notes-tag friend-show-tag">notes</span>
              </div>
              <div className="friend-show-text">{notes}</div>
            </li>
          </>
        );
      }

      return notesLi;
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
                  {this.renderBirthday()}
                  {this.renderCurrentCity()}
                  {this.renderHometown()}
                  {this.renderFamily()}
                  {this.renderEducation()}
                  {this.renderHobbies()}
                  {this.renderNotes()}
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default FriendShow;