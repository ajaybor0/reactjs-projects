import React, { useState } from "react";

function App() {
	const [count, setCounter] = useState(0);

	function increase() {
		setCounter(count + 1);
	}

	function decrease() {
		setCounter(count - 1);
	}

	return (
		<div className="container">
			<h1>{count}</h1>
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
		</div>
	);
}

export default App;
