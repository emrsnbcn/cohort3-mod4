import { useState } from "react";

function NameForm() {
	const [name, setName] = useState("");
	return (
		<div>
			<input
				type="text"
				name="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<p>{name}</p>
		</div>
	);
}

export default NameForm;
