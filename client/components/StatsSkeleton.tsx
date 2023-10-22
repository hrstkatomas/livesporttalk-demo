import React from "react";
import { Statistics } from "@flashscore/web-component-library";

function LabelPlaceholder() {
	const randomWidth = Math.floor(Math.random() * 200) + 100;
	return <div style={{ width: `${randomWidth}px`, height: "15px", backgroundColor: "#eee", borderRadius: "3px" }} />;
}

export function StatsSkeleton() {
	return (
		<div>
			{[...Array(17)].map((_, index) => (
				<Statistics
					key={index}
					name={<LabelPlaceholder />}
					homeValue={"0"}
					awayValue={"0"}
					awayValueLabel={" "}
					homeValueLabel={" "}
				/>
			))}
		</div>
	);
}
