import Welcome from "./components/Welcome";
import { useState } from "react";
import LikeButton from "./components/LikeButton";

function App() {
	// let count = 0
	// fuction setCount() {}
	// [variable, functionToUpdateTheVariable] = useState(initialValue)
	const [count, setCount] = useState(0);
	return (
		<div>
			<Welcome fullname="John Doe" age="42" />
			<h2>My Count {count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<hr />

			<LikeButton />
		</div>
	);
}

export default App;
