import React from "react";
import ReactDOM from "react-dom";

export default class NumOfDecksInput extends React.Component {

	render() {
		return (
			<div>
				<span className="deckOption selected" onClick={this.selectDeckOption}>1</span>
				<span className="deckOption" onClick={this.selectDeckOption}>2</span>
				<span className="deckOption" onClick={this.selectDeckOption}>4</span>
				<span className="deckOption" onClick={this.selectDeckOption}>6</span>
				<span className="deckOption" onClick={this.selectDeckOption}>8</span>
			</div>
		);
	}

	selectDeckOption = (e) => {
		const selected = e.target.innerHTML;
		const options = ReactDOM.findDOMNode(this).getElementsByClassName("deckOption");
		
		this.props.setNumOfDecks(selected);		// change state

		/* style */
		for (var i = options.length - 1; i >= 0; i--) {		// toggle class
		 	if (options[i] !== e.target) {
		 		options[i].classList.remove("selected");
		 	}
		 	else {
		 		options[i].classList.add("selected");
		 	}
		}
	}
}
