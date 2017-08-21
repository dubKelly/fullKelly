import React from "react";

export default class NumOfDecksInput extends React.Component {

	selectDeckOption = (e) => {
		 
		 const selected = e.target.innerHTML;
		 this.props.setNumOfDecks(selected);

		 const options = document.getElementsByClassName("deckOption");
		 for (var i = options.length - 1; i >= 0; i--) {
		 	if (options[i] !== e.target) {
		 		options[i].classList.remove("selected");
		 	}
		 	else {
		 		options[i].classList.add("selected");
		 	}
		 }
	}

	render() {
		return (
			<div>
				<span className="deckOption" onClick={this.selectDeckOption}>1</span>
				<span className="deckOption" onClick={this.selectDeckOption}>2</span>
				<span className="deckOption" onClick={this.selectDeckOption}>4</span>
				<span className="deckOption" onClick={this.selectDeckOption}>6</span>
				<span className="deckOption" onClick={this.selectDeckOption}>8</span>
			</div>
		);
	}
}
