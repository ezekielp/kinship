import React from 'react';
import './landing_page.css';
import SessionForm from '../session/session_form_container';
import Logo from './logo';
import Quote from './quotes';

class LandingPage extends React.Component {

	render() {
		return (
			<div className="landing-page">
				<div className="transition-page">
					<div className="logo-container">
						<Logo />
					</div>
				</div>
				<div className="left-side">
					{/* <div className="title-container">
						<div className="friend">Friend</div>
						<div className="facts">Facts</div>
					</div> */}
					<div className="logo-container">
						<Logo />
					</div>
					<div className="motto-catchphrase"><Quote/></div>
				</div>
				<SessionForm />
			</div>
		);
	}
}

export default LandingPage;
