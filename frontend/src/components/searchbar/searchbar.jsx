import React from 'react';
import './searchbar.css';
import { withRouter } from "react-router";

class Searchbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			queryString: "",
			queryResult: null,
			errors: null
		};

		this.clearQuery = this.clearQuery.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
		this.resetQuery = this.resetQuery.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	clearQuery(){
		this.setState({
			queryString: "",
			queryResult: null,
			errors: null
		});
	}

	updateQuery(event){
		this.setState({
			queryString: event.currentTarget.value,
			errors: null
		});
	}

	resetQuery(){
		this.input.value="";
		this.setState({
			errors: null
		});
	}

	componentDidUpdate(prevProps, prevState){
		if (prevState.queryString != this.state.queryString){
			if (this.state.queryString !== ""){
				let queryResult = [];
				this.props.friends.forEach((friend)=>{
					if (friend.name.toLowerCase().includes(this.state.queryString.toLowerCase())){
						queryResult.push(friend);
					}
				});
				this.setState({
					queryResult: (queryResult.length > 0) ? (queryResult) : null
				});
			} else {
				this.setState({
					queryResult: null
				});
			}
		}
	}

	handleSubmit(){
		if (this.state.queryString === ''){
			this.state.errors = "Please enter a friend's name";
		} else if (!this.state.queryResult){
			this.state.errors = "No such friend was found";
			this.props.history.push(`/friends/friendless`);
		} else {
			this.props.history.push(`/friends/${this.state.queryResult[0]._id}`);
		}
	}

	render() {
		let queryResult = (this.state.queryResult) ?
		(<ul className="friend-search-result-list">
			{this.state.queryResult.map((friend)=>(
				<li
				key={friend._id}
				className="friend-search-result-item"
				onMouseDown={()=>this.props.history.push(`/friends/${friend._id}`)}>
				{friend.name}
				</li>
			))}
		</ul>) :
		null;

		return (
			<form className="searchbar-container" onSubmit={this.handleSubmit}>
				<div 
				className="searchbar-clear-field"
				onMouseDown={this.resetQuery}>X</div>
				<input
					onChange={this.updateQuery}
					onBlur={this.clearQuery}
					ref={(el) => this.input = el}
					className="searchbar-input-field"
					type="text"
					placeholder="Search for a friend..."
				/>
				{queryResult}
			</form>
		);
	}
}

export default withRouter(Searchbar);
