import React from 'react';
import NavbarContainer from '../nav/navbar_container';
import FriendsSidebar from './friends_sidebar';
import FriendsIndexItem from './friends_index_item';
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
				<li key="999">
					<div
						onClick={() => this.props.history.push('/friends')}
						className="friend-card-outer-container friend-card-container friend-create-link-card"
					>
						<div className="friend-create-link-card-text">
							Go Back to main page
						</div>
					</div>
				</li>
			</ul>
		) : (
			<ul>
				<li key="0">
					<div className="friend-card-outer-container friend-card-container friend-create-link-card">
						<div className="friend-create-link-card-text">
							No Friends Found!
						</div>
					</div>
				</li>
				<li key="1">
					<div
						onClick={() => this.props.history.push('/friends')}
						className="friend-card-outer-container friend-card-container friend-create-link-card"
					>
						<div className="friend-create-link-card-text">
							Go Back to main page
						</div>
					</div>
				</li>
			</ul>
		);

		return (
			<div>
				<NavbarContainer />
				<div className="friends-below-navbar-container">
					<FriendsSidebar friends={friends} />
					<div className="friend-cards-container">{friendProfileLis}</div>
				</div>
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
