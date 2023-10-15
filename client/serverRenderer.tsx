import React from "react";
import { renderToString } from "react-dom/server";
import { StatisticsProps, StatisticsRenderer } from "./components/Statistics";

let buffer = "";

process.stdin.on("data", (data) => {
	buffer += data;
});

process.stdin.on("end", () => {
	const props = JSON.parse(buffer) as StatisticsProps;

	const html = renderToString(
		<div id={"statistics"}>
			<StatisticsRenderer {...props} />
		</div>,
	);

	process.stdout.write(html);
});
