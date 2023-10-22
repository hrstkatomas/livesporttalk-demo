import React from "react";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { Greeter } from "./components/Greeter";
import { Stats } from "./components/Stats";

export function App() {
	return (
		<div>
			<Greeter />
			<Stats />
		</div>
	);
}
