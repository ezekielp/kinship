import React from 'react';
import './about.css';

class About extends React.Component {
    constructor(props){
        super(props)

        this.renderAboutOrTeamInfo = this.renderAboutOrTeamInfo.bind(this)
    }

    renderAboutOrTeamInfo () {
        const {type} = this.props

        if (type === "about") {
            return (
                <div className="about-us">
                    <h1 className="about-us-title">About Kinship</h1>
                    <br />
                    <p className="about-us-description">The Kinship app allows users to store and organize information about friends,
                        family members, and social contacts.
                        While current social media sites have some information one may want to access about a person,
                        not everyone uses social media, making the information inaccessible,
                        or the details you want to record may not exist online.
                    </p>
                </div>
            )
        }else {
            return (
                <div className="our-team">
                    <h1 className="our-team-title">Meet the team</h1>
                    <br />
                    <p className="our-team-description"> 
                        We're a team of 4 graduates from App Academy, based in New York City. 
                        We are a group of like-minded individuals who enjoy coding and spending time with family and friends.
                        Kinship is a passion project derived from our desire to stay connected with people. 
                    </p>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="about-page-modal-body">
                {this.renderAboutOrTeamInfo()}
                <br/>
                <div className="co-founders-wrapper">
                    <h2 className="co-founder-title">Co-Founders</h2>

                    <div className="all-profile-wrapper">
                        <div className="profile-pair-left">
                            <div className="profile-wrapper">
                                <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/12599898?s=400&v=4" alt=""/>
                                <span className="name-link-wrapper">
                                    <h3 className="name"><a target="_blank" href="https://ezekielp.github.io" target="_blank">Ezekiel Pfeifer</a></h3>
                                    <ul className="icons">
                                        <li><a target="_blank" href="https://github.com/ezekielp" className="icon brands fab fa-github"></a></li>
                                        <li><a target="_blank" href="https://www.linkedin.com/in/ezekielpfeifer/" className="icon brands  fab fa-linkedin"></a></li>
                                        <li><a target="_blank" href="https://angel.co/ezekiel-pfeifer" className="icon brands fab fa-angellist"></a></li>
                                        <li><a target="_blank" href="http://www.ezekielp.com"><i className="icon fa fa-briefcase" aria-hidden="true"></i></a> </li>
                                    </ul>
                                </span>
                            </div>

                            <div className="profile-wrapper">
                                <img className="profile-pic" src="https://avatars2.githubusercontent.com/u/38178219?s=400&v=4" alt="" />
                                <span className="name-link-wrapper">
                                    <h3 className="name"><a target="_blank" href="https://taeinha.com/index.html">Tae In Ha</a></h3>
                                    <ul className="icons">
                                        <li><a target="_blank" href="https://github.com/taeinha" className="icon brands fab fa-github"></a></li>
                                        <li><a target="_blank" href="https://www.linkedin.com/in/tae-in-ha/" className="icon brands  fab fa-linkedin"></a></li>
                                        <li><a target="_blank" href="https://angel.co/tae-in-ha" className="icon brands fab fa-angellist"></a></li>
                                        <li><a target="_blank" href="http://www.taeinha.com"><i className="icon fa fa-briefcase" aria-hidden="true"></i></a> </li>
                                    </ul>
                                </span>
                            </div>
                        </div>

                        <div profile="profile-pair-right">
                            <div className="profile-wrapper">
                                <img className="profile-pic" src="https://avatars0.githubusercontent.com/u/55555255?s=400&v=4" alt="" />
                                <span className="name-link-wrapper">
                                    <h3 className="name"><a target="_blank" href="https://applecidera.github.io/">Andrew Lee</a></h3>
                                    <ul className="icons">
                                        <li><a target="_blank" href="https://github.com/applecidera" className="icon brands fab fa-github"></a></li>
                                        <li><a target="_blank" href="https://www.linkedin.com/in/andrew-lee-1301a619b/" className="icon brands  fab fa-linkedin"></a></li>
                                        <li><a target="_blank" href="https://angel.co/andrew-lee-184" className="icon brands fab fa-angellist"></a></li>
                                        <li><a target="_blank" href="https://applecidera.github.io/"><i className="icon fa fa-briefcase" aria-hidden="true"></i></a> </li>

                                    </ul>
                                </span>
                            </div>

                            <div className="profile-wrapper">
                                <img className="profile-pic" src="https://avatars2.githubusercontent.com/u/33696314?s=400&v=4" alt="" />
                                <span className="name-link-wrapper">
                                    <h3 className="name"><a target="_blank" href="https://kzed-1.github.io/">Kenel Zhao</a></h3>
                                    <ul className="icons">
                                        <li><a target="_blank" href="https://github.com/kzed-1" className="icon brands fab fa-github"></a></li>
                                        <li><a target="_blank" href="https://www.linkedin.com/in/kenel-zhao-961575165/" className="icon brands  fab fa-linkedin"></a></li>
                                        <li><a target="_blank" href="https://angel.co/kenel-zhao" className="icon brands fab fa-angellist"></a></li>
                                        <li><a target="_blank" href="https://kzed-1.github.io/"><i className="icon fa fa-briefcase" aria-hidden="true"></i></a></li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default About;