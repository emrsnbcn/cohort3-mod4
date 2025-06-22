import { useEffect } from "react";

function Component2() {
	useEffect(() => {
		const timer = setInterval(() => console.log("Tick"), 500);

		return () => clearInterval(timer);
	}, []);

	return <h2>Component 2</h2>;
}

export default Component2;
