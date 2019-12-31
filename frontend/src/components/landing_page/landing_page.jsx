import React from 'react';
import './landing_page.css';
import SessionForm from '../session/session_form_container';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="landing-page">
				<div className="left-side triangle">
					<div className="motto-catchphrase">Remember Your Friends Today!</div>
					<div className="logo-container">
						<div className="first-f">F</div>
						<div className="friend">Friend</div>
						<div className="facts">Facts</div>
						<div className="second-f">F</div>
					</div>
				</div>
				<SessionForm />
			</div>
		);
	}
}

export default LandingPage;
