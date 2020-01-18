import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPass, setConfirmPass] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPass) {
			alert(`passwords don't match`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPass("");
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = async event => {
		const { name, value } = event.target;
		name === "email"
			? setEmail(value)
			: name === "displayName"
			? setDisplayName(value)
			: name === "password"
			? setPassword(value)
			: setConfirmPass(value);
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and passowrd</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPass"
					value={confirmPass}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
