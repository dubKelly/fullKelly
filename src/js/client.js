import React from "react";
import ReactDOM from "react-dom";

import Setup from "./components/Setup";
import Game from "./components/Game";

class Layout extends React.Component {
	constructor() {
		super();
		this.state = {

			/* Game Setup */
			numOfDecks: "1",
			deck: [],
			cardsDealt: []
		};
	}

	setNumOfDecks(numOfDecks) {
		this.setState({numOfDecks});
	}

	setDeck(deck) {
		this.setState({deck});
	}

	setCardsDealt(cardsDealt) {
		this.setState({cardsDealt})
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Setup 
					numOfDecks={this.state.numOfDecks}
					setNumOfDecks={this.setNumOfDecks.bind(this)}
					deck={this.state.deck}
					setDeck={this.setDeck.bind(this)}
					cardsDealt={this.state.cardsDealt}
					setCardsDealt={this.setCardsDealt.bind(this)}
				/>
				<Game 
					numOfDecks={this.state.numOfDecks}
					deck={this.state.deck}
					cardsDealt={this.state.cardsDealt}
				/>
			</div>
		);
	}
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
