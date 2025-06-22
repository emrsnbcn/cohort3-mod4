import { useEffect, useState } from "react";
import Component2 from "./Component2";

function App() {
	const [count, setCount] = useState(0);
	const [user, setUser] = useState(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		async function fetchUser() {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/users/1"
			);
			const data = await res.json();
			setUser(data);
		}
		fetchUser();

		return () => setUser(null);
	}, []);

	// useEffect with empty dependency array will only run once on mount
	// how to do a clean up to avoid memory leaks
	return (
		<>
			<h1>Hello World</h1>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<div>{!user ? <h2>Loading...</h2> : <h2>{user.name}</h2>}</div>

			{show ? <Component2 /> : null}
			<button onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show"}
			</button>
		</>
	);
}

export default App;
