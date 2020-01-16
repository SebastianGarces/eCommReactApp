import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		setEmail("");
		setPassword("");
	};

	const handleChange = event => {
		const { value, name } = event.target;
		name === "email" ? setEmail(value) : setPassword(value);
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					required
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					required
					label="Password"
				/>

				<CustomButton type="submit">SIGN IN</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
