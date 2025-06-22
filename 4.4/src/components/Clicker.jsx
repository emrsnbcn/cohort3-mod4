function Clicker() {
	const clickHandler = (name) => alert("Hello " + name);

	return <button onClick={() => clickHandler("john")}>Click Me</button>;
}

export default Clicker;
