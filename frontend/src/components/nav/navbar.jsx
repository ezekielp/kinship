import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Searchbar from '../searchbar/searchbar_container';
import "./navbar.css";
import { limitChars } from '../../util/text_util';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          loggedIn: this.props.loggedIn
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
      this.props.openModal({type: 'logout-confirmation'});
    }

    render() {
      if (!this.state.loggedIn) {
        return <Redirect to="/" />;
      }

        return (
          <div className="navbar-container">
            <Link to="/friends" className="navbar-logo-link">
              <div className="navbar-logo-container">
                <span className="navbar-logo-kin">kin</span>
                <span className="navbar-logo-ship">ship</span>
              </div>
            </Link>
            <Searchbar />
            <div className="dummy-space" />
            {/* <div className="dummy-space" /> */}
            <div className="hidden-email-container">
              <div
                className="navbar-logout-btn"
                onClick={() => this.handleLogout()}
              >
                Logout
              </div>
              <div className="hidden-email">{limitChars(this.props.email, 17)}</div>
            </div>
              
            </div>
        );
    }
}

export default Navbar;