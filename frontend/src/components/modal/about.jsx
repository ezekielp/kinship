import React from 'react';
import './about.css';

class About extends React.Component {

    render () {
        return (
            <div className="about-page-modal-body">
                <div className="about-us">
                    <h1 className="about-us-title">About Us</h1>
                    <br/>
                    <p className="about-us-description">The Kinship app allows users to store and organize information about friends, 
                        family members, and social contacts. 
                        While current social media sites have some information one may want to access about a person, 
                        not everyone uses social media, making the information inaccessible, 
                        or the details you want to record may not exist online.
                    </p>
                </div>
                <br/>
                <div className="co-founders-wrapper">
                    <h2 className="co-founder-title">Co-Founders</h2>
                    <span className="name-link-wrapper">
                        <h3 className="name">Ezekiel Pfeifer</h3>
                        <ul className="icons">
                            <li><a href="https://github.com/ezekielp" className="icon brands fab fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/ezekielpfeifer/" className="icon brands  fab fa-linkedin"></a></li>
                            <li><a href="https://angel.co/ezekiel-pfeifer" className="icon brands fab fa-angellist"></a></li>
                        </ul>
                    </span>
                    <span className="name-link-wrapper">
                        <h3 className="name">Tae In Ha</h3>
                        <ul className="icons">
                            <li><a href="https://github.com/taeinha" className="icon brands fab fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/tae-in-ha/" className="icon brands  fab fa-linkedin"></a></li>
                            <li><a href="https://angel.co/tae-in-ha" className="icon brands fab fa-angellist"></a></li>
                        </ul>
                    </span>
                    <span className="name-link-wrapper">
                        <h3 className="name">Andrew Lee</h3>
                        <ul className="icons">
                            <li><a href="https://github.com/applecidera" className="icon brands fab fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/andrew-lee-1301a619b/" className="icon brands  fab fa-linkedin"></a></li>
                            <li><a href="https://angel.co/andrew-lee-184" className="icon brands fab fa-angellist"></a></li>
                        </ul>
                    </span>
                    <span className="name-link-wrapper">
                        <h3 className="name">Kenel Zhao</h3>
                        <ul className="icons">
                            <li><a href="https://github.com/kzed-1" className="icon brands fab fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/kenel-zhao-961575165/" className="icon brands  fab fa-linkedin"></a></li>
                            <li><a href="https://angel.co/kenel-zhao" className="icon brands fab fa-angellist"></a></li>
                        </ul>
                    </span>
                </div>

            </div>
        )
    }
}

export default About;