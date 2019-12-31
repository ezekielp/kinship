import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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