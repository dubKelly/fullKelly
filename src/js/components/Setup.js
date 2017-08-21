import React from "react";

import NumOfDecksInput from "./Setup/NumOfDecksInput.js"

export default class Setup extends React.Component {
	render() {
		return (
			<form>
				<NumOfDecksInput 
					numOfDecks={this.props.numOfDecks}
					setNumOfDecks={this.props.setNumOfDecks}
				/>
			</form>
		);
	}
}
