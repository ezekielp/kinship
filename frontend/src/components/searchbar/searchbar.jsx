import React from 'react';

class Searchbar extends React.Component {
	render() {
		return (
			<input
				className="searchbar-input-field"
				type="text"
				placeholder="Search for a friend.."
			/>
		);
	}
}

export default Searchbar;
