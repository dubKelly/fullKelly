import React from "react";

export default class Deck extends React.Component {
	
	generateDeck() {

		let gameDeck = [];
		const numOfDecks = this.props.numOfDecks;
		let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
		const faces = ["Jack", "Queen", "King", "Ace"];
		const pipValues = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

		let index = 0;		// faces && suits
		let pipIndex = 0;

		/* Create Pip Cards */
		
		for (var i = 0; i < (36 * numOfDecks); i++) {
			if (i % 4 === 0) {		// reset suits
				index = 0;
			}
			if (i % 9 === 0) {		// reset pipValues
				pipIndex = 0;
			}
			let key = pipValues[pipIndex] + "_" + (i + 1);
			let div = <div
									key={key}
									class={"card " + pipValues[pipIndex] + suits[index]}
									data-points={pipIndex + 2}
								/>
			gameDeck.push(div);
			index++;
			pipIndex++;
		}

		/* Create Face Cards */

		for (var i = 0; i < ((faces.length * 4) * numOfDecks); i++) {
			if (i % 4 === 0) {		// reset suits && faces
				index = 0;
				suits.push(suits.shift());		// shuffle suits
			}
			let key = faces[index] + "_" + (i + 1);
			let div = "";
			if (faces[index] !== "Ace") {
				div = <div
								key={key}
								class={"card " + faces[index] + suits[index]}
								data-points={10}
							/>
			}
			else {
				div = <div
								key={key}
								class={"card " + faces[index] + suits[index]}
								data-points={11 || 1}		// TODO: change "data-points" to function
							/>
			}
			gameDeck.push(div);
			index++;
		}

		return gameDeck;

	}

	render() {
		console.log(this.generateDeck());
		return (
			<div class="deck">
				{this.generateDeck()}
			</div>
		);
	}
}