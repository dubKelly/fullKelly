import React from "react";

export default class NumOfDecksInput extends React.Component {

	handleChange(e) {
		const numOfDecks = e.target.value;
		this.props.setNumOfDecks(numOfDecks);
	}

	render() {
		return (
			<input 
				value={this.props.numOfDecks}
				onChange={this.handleChange.bind(this)}
			/>
		);
	}
}
