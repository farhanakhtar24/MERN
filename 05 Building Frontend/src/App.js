import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import NewPlace from "./Places/pages/NewPlace";
import UserPlaces from "./Places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./Users/pages/Users";

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route path="/" exact>
						<Users />
					</Route>
					<Route path="/:userId/places" exact>
						<UserPlaces />
					</Route>
					<Route path="/places/new" exact>
						<NewPlace />
					</Route>
					<Redirect to="/" />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
