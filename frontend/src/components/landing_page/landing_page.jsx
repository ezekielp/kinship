import React from 'react';
import './landing_page.css';

class LandingPage extends React.Component {

    render() {
        return (
            <div class="landing-page">
    <div class="left-side triangle">
      <div class="motto-catchphrase">Remember Your Friends Today!</div>
      <div class="logo-container">
        <div class="first-f">F
        </div>
        <div class="friend">Friend</div>
        <div class="facts">Facts</div>
        <div class="second-f">F</div>
      </div>
    </div>
    <div class="right-side">
      <div class="friend-facts-1">
        <span class="f-1">F</span>
        <span class="r">r</span>
        <span class="i">i</span>
        <span class="e">e</span>
        <span class="n">n</span>
        <span class="d">d</span>
        <span class="f-2">F</span>
        <span class="a">a</span>
        <span class="c">c</span>
        <span class="t">t</span>
        <span class="s">s</span>
      </div>
      <div class="friend-facts-2">
        <span class="f-1">F</span>
        <span class="r">r</span>
        <span class="i">i</span>
        <span class="e">e</span>
        <span class="n">n</span>
        <span class="d">d</span>
        <span class="f-2">F</span>
        <span class="a">a</span>
        <span class="c">c</span>
        <span class="t">t</span>
        <span class="s">s</span>
      </div>
      <div class="session-container">
        <button class="signup-session-button">Get Started!</button>
        <span>Already have an account?</span>
        <button class="login-session-button">Login!</button>
      </div>
    </div>
  </div>
        );
    }
}

export default LandingPage;