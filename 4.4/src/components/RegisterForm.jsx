import { useState } from "react";

function RegisterForm() {
	const [user, setUser] = useState({
		username: "",
		password: "",
		password2: "",
	});

	const handleChange = (e) => {
		// ...user -> copy the current user data
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.username.length < 8)
			return alert("Username must be atleast 8");

		if (user.password !== user.password2)
			return alert("Passwords should match");

		alert("Registered Successfully");
	};
	return (
		<form onSubmit={handleSubmit}>
			{JSON.stringify(user)}
			<div>
				<input type="text" name="username" onChange={handleChange} />
			</div>
			<div>
				<input
					type="password"
					name="password"
					onChange={handleChange}
				/>
			</div>
			<div>
				<input
					type="password"
					name="password2"
					onChange={handleChange}
				/>
			</div>
			<button>Register!</button>
		</form>
	);
}
export default RegisterForm;
