import React from "react";
import ReactDOM from "react-dom";

import Setup from "./components/Setup.js";
import Deck from "./components/Deck.js";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			numOfDecks: "1",
		};
	}

	setNumOfDecks(numOfDecks) {
		this.setState({numOfDecks});
	} 

	render() {
		return (
			<div>
				<Setup 
					numOfDecks={this.state.numOfDecks}
					setNumOfDecks={this.setNumOfDecks.bind(this)}
				/>
				<Deck numOfDecks={this.state.numOfDecks} />
			</div>
		);
	}
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
