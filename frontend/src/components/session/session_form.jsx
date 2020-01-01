import React from 'react';
// import { Link } from 'react-router-dom';
import './session_form.css';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formType: null,
			email: '',
			password: '',
			password2: '',
			errors: this.props.errors,
			transitionDirection: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.isAuthenticated === true) {
			this.props.history.push('/friends');
		}
		if (this.props.errors.length !== prevProps.errors.length) {
			this.setState({
				errors: this.props.errors
      });
		}
	}

	update(field) {
		return (e) =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		if (this.state.formType === 'signup') {
			this.props.signup(user);
		} else {
			this.props.login(user);
		}
	}

	transitionOut(formType) {
    let td = formType === 'login' || formType === 'signup' ? 'open' : 'close';
    this.props.clearErrors();
		this.setState({
			formType: 'transition',
      transitionDirection: td,
		});
		setTimeout(
			() =>
				this.setState({
					formType: formType
				}),
			1000
		);
	}

	demoLogin() {
		let user = {
			email: 'demo@user.com',
			password: '123123123'
		};
		this.props.login(user);
	}

	render() {
		let errors =
			(this.props.errors.length > 0) ? (
				<div className="errors-popup">
          <span>{this.props.errors[0]}</span>
        </div>
      ) : null;
  
		if (this.state.formType === null) {
			return (
				<div className="right-side">
					<div className="session-container-null">
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
						<button
							onClick={() => this.demoLogin()}
							className="demo-login-button"
						>
							Demo-Login!
						</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'transition') {
			let td3;let td4;let td5;let td6;let td7;
			if (this.state.transitionDirection === 'close') {
				td3 = 'signup-session-button phase-in-transition';
				td4 = 'login-session-button phase-in-transition';
        td5 = 'session-container-transition-reverse';
        td6 = "demo-login-button phase-in-transition";
        td7= "phase-in-transition";
			} else {
				td3 = 'signup-session-button phase-out';
				td4 = 'login-session-button phase-out';
        td5 = 'session-container-transition';
        td6 = "demo-login-button phase-out";
        td7= "phase-out";
			}
			return (
				<div className="right-side">
					<div className={td5}>
						<button className={td3}>Get Started!</button>
						<span className={td7}>Already have an account?</span>
						<button className={td4}>Login!</button>
						<button className={td6}>Demo-Login!</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'login') {
			return (
				<div className="right-side">
					<form className="session-container" onSubmit={this.handleSubmit}>
            {errors}
						<label className="phase-in" htmlFor="email-input">
							Email
						</label>
						<input
							className="phase-in"
							id="email-input"
							type="text"
							onChange={this.update('email')}
						/>
						<label className="phase-in" htmlFor="password-input">
							Password
						</label>
						<input
							className="phase-in"
							id="password-input"
							type="password"
							onChange={this.update('password')}
						/>
						<input
							type="submit"
							className="session-submit-button phase-in"
							value="Login!"
						/>
						<button
							onClick={() => this.transitionOut(null)}
							className="go-back-button phase-in"
						>
							Go Back
						</button>
					</form>
				</div>
			);
		}
		if (this.state.formType === 'signup') {
			return (
				<div className="right-side">
					<form className="session-container" onSubmit={this.handleSubmit}>
            {errors}
						<label className="phase-in" htmlFor="email-input">
							Email
						</label>
						<input
							className="phase-in"
							id="email-input"
							type="text"
							onChange={this.update('email')}
						/>
						<label className="phase-in" htmlFor="password-input">
							Password
						</label>
						<input
							className="phase-in"
							id="password-input"
							type="password"
							onChange={this.update('password')}
						/>
						<label className="phase-in" htmlFor="password-confirmation-input">
							Confirm Password
						</label>
						<input
							className="phase-in"
							id="password-confirmation-input"
							type="password"
							onChange={this.update('password2')}
						/>
						<input
							type="submit"
							className="session-submit-button phase-in"
							value="Signup!"
						/>
						<button
							onClick={() => this.transitionOut(null)}
							className="go-back-button phase-in"
						>
							Go Back
						</button>
					</form>
				</div>
			);
		}
	}
}

export default SessionForm;
