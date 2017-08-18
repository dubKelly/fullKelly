import React from "react";
import ReactDOM from "react-dom";

import Deck from "./components/Deck.js";

class Layout extends React.Component {
	render() {
		return (
			<Deck />
		);
	}
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);