import React from "react";
import { renderToString } from "react-dom/server";
import { StatsRenderer } from "./components/Stats";

let buffer = "";
process.stdin.on("data", (data) => {
	buffer += data;
});

process.stdin.on("end", () => {
	process.stdout.write(
		renderToString(
			<div id={"root"}>
				<StatsRenderer {...JSON.parse(buffer)} />
			</div>,
		),
	);
});
