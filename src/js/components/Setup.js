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
		const numOfPlayers = this.props.numOfPlayers;
		const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
		const faces = ["Jack", "Queen", "King", "Ace"];
		const pipValues = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

		let index = 0;		// faces && suits
		let pipIndex = 0;

		const createPipCards = () => {
			for (var i = 0; i < (36 * numOfDecks); i++) {
				if (i % 4 === 0) {		// reset suits
					index = 0;
				}
				if (i % 9 === 0) {		// reset pipValues
					pipIndex = 0;
				}

				const key = pipValues[pipIndex] + "_" + (i + 1);
				const className = "card " + pipValues[pipIndex] + suits[index];
				const points = pipIndex + 2;
				const card = {
					key: key,
					className: className,
					points: points
				}

				deck.push(card);
				index++;
				pipIndex++;
			}
		}
		createPipCards();

		const createFaceCards = () => {
			for (var i = 0; i < ((faces.length * 4) * numOfDecks); i++) {
				if (i % 4 === 0) {		// reset suits && faces
					index = 0;
					suits.push(suits.shift());		// shuffle suits
				}

				const key = faces[index] + "_" + (i + 1);
				let className = "card " + faces[index] + suits[index];

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


		const dealCards = () => {

			const cardsDealt = [];
		
			const renderCard = (card, interval) => {
				setTimeout(() => {
					cardsDealt.push(card);
					this.props.setCardsDealt(cardsDealt);			
				}, 1000 * interval);
			}

			for (var i = 0; i < ((numOfPlayers + 1) * 2); i++) {		// Deal two cards to each player and dealer
				const randomIndex = Math.floor(Math.random() * deck.length); 
				const dealtCard = deck.splice(randomIndex, 1);
				const renderedCard = <div
					key={dealtCard[0].key}
					className={dealtCard[0].className}
					data-points={dealtCard[0].points}
				></div>
				renderCard(renderedCard, i);
			}
		}
		dealCards();
	}
}
