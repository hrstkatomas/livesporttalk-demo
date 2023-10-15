import React from "react";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { Greeter } from "./components/Greeter";
import { Statistics } from "./components/Statistics";

export function App() {
	return (
		<div>
			<Greeter />
			<Statistics />
		</div>
	);
}
