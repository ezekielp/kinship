import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          // justLoggedOut: false,
          loggedIn: this.props.loggedIn
        }

        
    }

    handleLogout() {
      this.props.logout();
      this.setState({
        loggedIn: false
      });
    }

    render() {
      // if (this.state.justLoggedOut) {
      //   this.setState({ justLoggedOut: false });
      //   return <Redirect to="/" />;
      // }
      
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
                onClick={() => this.props.logout()}>Logout
                </div>
          </div>
        );
    }
}

export default Navbar;