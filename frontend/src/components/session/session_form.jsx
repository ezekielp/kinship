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
      errors: {},
      transitionDirection: null
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
	}

	componentDidUpdate(prevProps, prevState){
    if (this.props.isAuthenticated === true){
      this.props.history.push('/friends');
    }
	  if (this.props.errors.length !== prevProps.errors.length){
	    this.setState({
	      errors: this.props.errors
	    })
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
    
    if (this.state.formType === "signup"){
      this.props.signup(user);
    } else {
      this.props.login(user);
    }
	}

	transitionOut(formType) {
    let td = (formType === "login" ||  formType === "signup") ? "open" : "close";
    this.setState({
      formType: 'transition',
      transitionDirection: td
    });
    setTimeout(
      () =>
        this.setState({
          formType: formType
        }),
      1000
    );
  }

  demoLogin(){
		let user = {
			email: "demo@user.com",
			password: "123123123"
    };
    this.props.login(user);
  }

	render() {
		let errors =
			this.state.errors.length !== 0 ? (
				<ul>
					{Object.keys(this.state.errors).map((error, i) => (
						<li key={`error-${i}`}>{this.state.errors[error]}</li>
					))}
				</ul>
			) : null;

		if (this.state.formType === null) {
      if (this.state.transitionDirection === "close"){
        console.log("close");
      }
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
      if (this.state.transitionDirection === "open"){
        console.log("open");
      }
			return (
				<div className="right-side">
					<div className="friend-facts-1 exit-up">
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
					<div className="friend-facts-2 exit-down">
						<span className="f">F</span>
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
					<div className="session-container-transition">
						<button className="signup-session-button phase-out">
							Get Started!
						</button>
						<span className="phase-out">Already have an account?</span>
						<button className="login-session-button phase-out">Login!</button>
					</div>
				</div>
			);
		}
		if (this.state.formType === 'login') {
			return (
				<div className="right-side">
					<form className="session-container" onSubmit={this.handleSubmit}>
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
						<input type="submit" className="session-submit-button phase-in" value="Login!" />
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
					<form className="session-container"  onSubmit={this.handleSubmit}>
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
						<input type="submit" className="session-submit-button phase-in" value="Signup!" />
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
