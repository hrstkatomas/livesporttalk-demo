import React from "react";
import { renderToString } from "react-dom/server";
import { StatsProps, StatsRenderer } from "./components/Stats";

let buffer = "";

process.stdin.on("data", (data) => {
	buffer += data;
});

process.stdin.on("end", () => {
	const props = JSON.parse(buffer) as StatsProps;

	const html = renderToString(
		<div id={"stats"}>
			<StatsRenderer {...props} />
		</div>,
	);

	process.stdout.write(html);
});
