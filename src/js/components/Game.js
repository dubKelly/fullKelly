import React from "react";

export default class Game extends React.Component {
	render() {
			console.log(this.props);
		return(
			<div>
				{this.props.cardsDealt}
			</div>
		);
	}
}