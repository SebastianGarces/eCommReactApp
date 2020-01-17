import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.utils";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribedFromAuth = auth.onAuthStateChanged(user => {
			user ? setCurrentUser(user) : setCurrentUser(null);
			console.log(currentUser);
		});

		return () => {
			unsubscribedFromAuth();
		};
	}, [currentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
