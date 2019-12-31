import React from 'react';
import { Link } from 'react-router-dom';
import './session_form.css';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formType: null
		};
	}

	transitionOut(formType) {
		this.setState({
			formType: 'transition'
		});
		setTimeout(
			() =>
				this.setState({
					formType: formType
				}),
			1
		);
	}

	render() {
		if (this.state.formType === null) {
			return (
				<div className="right-side">
					<div className="friend-facts-1">
						<span className="f-1">F</span>
						<span className="r">r</span>
						<span className="i">i</span>
						<span className="e">e</span>
						<span className="n">n</span>
						<span className="d">d</span>
						<span className="f-2">F</span>
						<span className="a">a</span>
						<span className="c">c</span>
						<span className="t">t</span>
						<span className="s">s</span>
					</div>
					<div className="friend-facts-2">
						<span className="f-1">F</span>
						<span className="r">r</span>
						<span className="i">i</span>
						<span className="e">e</span>
						<span className="n">n</span>
						<span className="d">d</span>
						<span className="f-2">F</span>
						<span className="a">a</span>
						<span className="c">c</span>
						<span className="t">t</span>
						<span className="s">s</span>
					</div>
					<div className="session-container">
						<button
							onClick={() => this.transitionOut('signup')}
							className="signup-session-button"
						>
							Get Started!
						</button>
						<span>Already have an account?</span>
						<button
							onClick={() => this.transitionOut('login')}
							className="login-session-button"
						>
							Login!
						</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'transition') {
			return (
				<div className="right-side">
					<div className="friend-facts-1">
						<span className="f-1 exit-up">F</span>
						<span className="r exit-up">r</span>
						<span className="i exit-up">i</span>
						<span className="e exit-up">e</span>
						<span className="n exit-up">n</span>
						<span className="d exit-up">d</span>
						<span className="f-2 exit-up">F</span>
						<span className="a exit-up">a</span>
						<span className="c exit-up">c</span>
						<span className="t exit-up">t</span>
						<span className="s exit-up">s</span>
					</div>
					<div className="friend-facts-2">
						<span className="f-1 exit-down">F</span>
						<span className="r  exit-down">r</span>
						<span className="i exit-down">i</span>
						<span className="e exit-down">e</span>
						<span className="n exit-down">n</span>
						<span className="d exit-down">d</span>
						<span className="f-2 exit-down">F</span>
						<span className="a exit-down">a</span>
						<span className="c exit-down">c</span>
						<span className="t exit-down">t</span>
						<span className="s exit-down">s</span>
					</div>
					<div className="session-container">
						<button className="signup-session-button">Get Started!</button>
						<span>Already have an account?</span>
						<button className="login-session-button">Login!</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'login') {
			return (
				<div className="right-side">
					<div className="session-container">
						<label htmlFor="email-input">Email</label>
						<input id="email-input" type="text" />
						<label htmlFor="password-input">Password</label>
						<input id="password-input" type="password" />
            <button className="session-submit-button">Login!</button>
						<button onClick={()=>this.setState({formType: null})} className="go-back-button">Go Back</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'signup') {
			return (
				<div className="right-side">
					<div className="session-container">
						<label htmlFor="email-input">Email</label>
						<input id="email-input" type="text" />
						<label htmlFor="password-input">Password</label>
						<input id="password-input" type="password" />
						<label htmlFor="password-confirmation-input">Confirm Password</label>
						<input id="password-confirmation-input" type="password" />
						<button className="session-submit-button">Signup!</button>
						<button onClick={()=>this.setState({formType: null})} className="go-back-button">Go Back</button>
					</div>
				</div>
			);
		}
	}
}

export default SessionForm;
