import React from 'react';
import './searchbar.css';

class Searchbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			queryString: "",
			queryResult: null
			// queryResult: [
			// 	{name: "Zeke", id: 10},
			// 	{name: "Tae", id: 9},
			// 	{name: "Kenel", id: 12},
			// 	{name: "Andrew", id: 15}
			// ]
		}

		this.clearQuery = this.clearQuery.bind(this);
		this.updateQuery = this.updateQuery.bind(this);
		this.resetQuery = this.resetQuery.bind(this);
	}

	clearQuery(){
		this.setState({
			queryString: ""
		})
	}

	updateQuery(event){
		this.setState({
			queryString: event.currentTarget.value
		})
	}

	resetQuery(){
		this.input.value="";
	}

	componentDidUpdate(prevProps, prevState){
		if (prevState.queryString != this.state.queryString){
			if (this.state.queryString !== ""){
				// console.log(this.state.queryString);
				// fill in queryResult here comparing with this.props.friends array
				// let queryResult = [];
				// this.props.friends.forEach((friend)=>{
					// if (friend.name.includes(this.state.queryString)){
						// queryResult.push(friend)
					// }
				// })
				//this.setState({
					// queryResult: (queryString.length > 0) ? (queryResult}) : null) 
				// })
			}
		}
	}

	render() {
		let queryResult = (this.state.queryResult) ?
		(<ul className="friend-search-result-list">
			{this.state.queryResult.map((friend)=>(
				<li
				key={friend.id}
				className="friend-search-result-item">
				{friend.name}
				</li>
			))}
		</ul>) :
		null;

		return (
			<div className="searchbar-container">
				<div 
				className="searchbar-clear-field"
				onClick={this.resetQuery}>X</div>
				<input
					onChange={this.updateQuery}
					onBlur={this.clearQuery}
					ref={(el) => this.input = el}
					className="searchbar-input-field"
					type="text"
					placeholder="Search for a friend.."
				/>
				{queryResult}
			</div>
		);
	}
}

export default Searchbar;
