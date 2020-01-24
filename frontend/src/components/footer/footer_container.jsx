import React from 'react';
import './footer.css';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';


class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="footer-items-wrapper">
                    
                    <h1 className="our-team-footer-title" onClick={() => this.props.openModal({type: "team"})}>Our Team</h1>
                    <span>
                        <h1 className="about">
                            About 
                            <p className="kinship-about-link" onClick={() => this.props.openModal({type: "about"})}>
                            <img className="favicon" src="favicon.ico" alt="" />
                            inship</p>
                        </h1>
                    </span>
                    <h1>&#9400; 2020</h1>
                </div>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null,mdp)(Footer);