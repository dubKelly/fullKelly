import React from "react";

export default class Deck extends React.Component {
	buildDeck() {

		let gameDeck = [];
		let numOfDecks = 1;
		let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
		const faces = ["Jack", "Queen", "King", "Ace"]

		/* Create Pip Cards */
		let pipValue = 1;
		let index = 0;
		
		for (var i = 0; i < (36 * numOfDecks); i++) {
			if (i % 9 === 0) {
				pipValue = 1;
			}
			if (i % 4 === 0) {
				index = 0;
			}
			pipValue++;
			let key = Math.random();
			let div = <div key={key} class={pipValue + suits[index]} data-points={pipValue} />
			gameDeck.push(div);
			index++;
		}

		/* Create Face Cards */

		for (var i = 0; i < ((faces.length * 4) * numOfDecks); i++) {
			if (i % 4 === 0) {
				index = 0;
				suits.push(suits.shift());
			}
			let key = Math.random();
			let div = "";
			if (faces[index] !== "Ace") {
				div = <div key={key} class={faces[index] + suits[index]} data-points={10} />
			}
			else {
				div = <div key={key} class={faces[index] + suits[index]} data-points={11 || 1} />
			}
			gameDeck.push(div);
			index++;
		}

		return gameDeck;

	}

	render() {
		console.log(this.buildDeck());
		return (
			<div id="deck">
				{this.buildDeck()}
			</div>
		);
	}
}