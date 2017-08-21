import React from "react";

export default class NumOfDecksInput extends React.Component {

	selectDeckOption(e) {
		const option = e.target;
		this.props.setNumOfDecks(option.innerHTML);
		option.classList.add("selected");
	}

	render() {
		return (
			<div>
				<span className="deckOption" onClick={this.selectDeckOption.bind(this)}>1</span>
				<span className="deckOption" onClick={this.selectDeckOption.bind(this)}>2</span>
				<span className="deckOption" onClick={this.selectDeckOption.bind(this)}>4</span>
				<span className="deckOption" onClick={this.selectDeckOption.bind(this)}>6</span>
				<span className="deckOption" onClick={this.selectDeckOption.bind(this)}>8</span>
			</div>
		);
	}
}
