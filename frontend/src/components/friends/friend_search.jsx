import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';
import FooterContainer from '../footer/footer_container';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FriendSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			queryString: this.props.queryString,
			queryResult: null
		};
  }
  
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.queryString !== this.props.queryString) {
			this.setState({
				queryString: this.props.queryString
			});
		}
	}

	render() {
    const { friends, openModal, deleteFriend } = this.props;
    let queryResult = [];
		if (this.state.queryString !== '') {
				this.props.friends.forEach((friend) => {
					if (
						friend.name
							.toLowerCase()
							.includes(this.state.queryString.toLowerCase())
					) {
						queryResult.push(friend);
					}
				});
					queryResult= queryResult.length > 0 ? queryResult : null;
			} else {
					queryResult= null;
			}

		let friendProfileLis = queryResult ? (
			<ul>
				{queryResult.map((friend, idx) => (
					<li key={idx}>
						<FriendsIndexItem
							friend={friend}
							openModal={openModal}
							deleteFriend={deleteFriend}
							className={`card-number-${idx}`}
						/>
					</li>
				))}
			</ul>
		) : (
			<ul>
				<li key="0">
					<div className="no-friends-found-msg">
						No friends found!
					</div>
				</li>
			</ul>
		);

		return (
			<div>
				<NavbarContainer />
				<div className="friends-below-navbar-container">
					<FriendsSidebar friends={friends} />
					<div className="friend-cards-container">
						<div className="search-results-header-container">
							<div 
							onClick={() => this.props.history.push('/friends')}
							className="back-to-main-button">
								&lt;&lt; Back to all profiles
							</div>
							<div className="search-results-header">
								Search results
							</div>
						</div>
							{friendProfileLis}
						</div>
				</div>
				<FooterContainer />
			</div>
		);
	}
}

const msp = (state, ownProps) => {
	return {
		friends: Object.values(state.entities.friends),
		queryString: ownProps.history.location.pathname.split('/').slice(-1).pop()
	};
};

export default connect(msp, null)(withRouter(FriendSearch));
