/* eslint-disable max-lines-per-function */
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import Home from "../Views/Home/Home";
import ReduxTestView from "../Views/ReduxTestView/ReduxTestView";
import BaseViewFromViteJs from "../Views/BaseViewFromVitejs/BaseViewFromViteJs";
import Logout from "../Views/Logout/Logout";
import MyProfile from "../Views/MyProfile/MyProfile";
import Settings from "../Views/Settings/Settings";
import PlayGame from "../Views/PlayGame/PlayGame";
import GameCanvas from "../Views/GameCanvas/GameCanvas";

/**
 * This is the router for a logged user
 * */
const	LoggedRouter = () =>
{
	return (
		<BrowserRouter >
			<Routes>
				{/* need to save route navigation */}
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/redux-test-view"
					element={<ReduxTestView />}
				/>

				{/* no save route navigation */}
				<Route
					path="/logout"
					element={<Logout />}
				/>

				<Route
					path="/me/profile"
					element={<MyProfile />}
				/>

				<Route
					path="/me/settings"
					element={<Settings />}
				/>
				<Route
					path="/play-game"
					element={<PlayGame />}
				/>
				<Route
					path="/starter-pack"
					element={<BaseViewFromViteJs />}
				/>

				<Route
					path="/signup"
					element={<Navigate to="/me/profile"/>}
					>

				</Route>
				<Route
					path="the-game"
					element={<GameCanvas />}
				/>
				<Route
					path="*"
					element={<h1>Error 404: Logged User</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default	LoggedRouter;