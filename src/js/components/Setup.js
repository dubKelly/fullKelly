import React from "react";
import ReactDOM from "react-dom";

import NumOfDecksInput from "./Setup/NumOfDecksInput"

export default class Setup extends React.Component {

	render() {
		return (
			<form>
				<NumOfDecksInput 
					numOfDecks={this.props.numOfDecks}
					setNumOfDecks={this.props.setNumOfDecks}
				/>
				<input 
					type="submit"
					onClick={this.startGame}
				/>
			</form>
		);
	}

	startGame = (event) => {

		event.preventDefault();

		/* Generate Deck */

		let deck = [];
		const numOfDecks = this.props.numOfDecks;
		let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
		const faces = ["Jack", "Queen", "King", "Ace"];
		const pipValues = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

		let index = 0;		// faces && suits
		let pipIndex = 0;

		const createPipCards = () => {
			for (var i = 0; i < (36 * numOfDecks); i++) {
				let key = pipValues[pipIndex] + "_" + (i + 1);
				let className = "card " + pipValues[pipIndex] + suits[index];
				let points = pipIndex + 2;
				let card = {
					key: key,
					className: className,
					points: points
				}

				if (i % 4 === 0) {		// reset suits
					index = 0;
				}
				if (i % 9 === 0) {		// reset pipValues
					pipIndex = 0;
				}

				deck.push(card);
				index++;
				pipIndex++;
			}
		}
		createPipCards();

		const createFaceCards = () => {
			for (var i = 0; i < ((faces.length * 4) * numOfDecks); i++) {
				let key = faces[index] + "_" + (i + 1);
				let className = "card " + faces[index] + suits[index];

				if (i % 4 === 0) {		// reset suits && faces
					index = 0;
					suits.push(suits.shift());		// shuffle suits
				}
				if (faces[index] !== "Ace") {
					let card = {
						key: key,
						className: className,
						points: 10
					}
					deck.push(card);
				}
				else {
					className = "card " + faces[index] + suits[index];
					let card = {
						key: key,
						className: className,
						points: 11 || 1		// TODO: change "data-points" to function
					}
					deck.push(card);
				}
				index++;
			}	
		}
		createFaceCards();

		this.props.setDeck(deck);

		/* Deal Cards */

		setTimeout(() => {
		const dealtCard = deck.pop();
		let renderedCard = <div 
			className={dealtCard.className}
		>Whoa!</div>
		this.props.setCardsDealt(renderedCard);			
		}, 2000);
	}
}
