import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          loggedIn: this.props.loggedIn
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
      this.props.logout();
      this.setState({
        loggedIn: false
      });
    }

    render() {
      if (!this.state.loggedIn) {
        return <Redirect to="/" />;
      }

        return (
          <div className="navbar-container">
            <Link to="/friends" className="navbar-logo-link">
              <div className="navbar-logo-container">
                <div className="navbar-logo-first-F">F</div>
                <div className="navbar-logo-second-F">F</div>
              </div>
            </Link>
            <div
                className="navbar-logout-btn" 
                onClick={() => this.handleLogout()}>Logout
                </div>
          </div>
        );
    }
}

export default Navbar;