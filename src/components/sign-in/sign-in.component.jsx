import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail("");
			setPassword("");
		} catch (error) {
			console.error(error);
		}
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
				<div className="button">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
