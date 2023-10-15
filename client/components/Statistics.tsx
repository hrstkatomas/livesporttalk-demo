import React, { useEffect } from "react";
import { Statistics as StatisticsComponent } from "@flashscore/web-component-library";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { requestStatistics } from "../mocks/statisticsApi/api";
import { statisticsZodSchema } from "../utils/statisticsZodSchema";
import { z } from "zod";

const useStatistics = () => {
	const [statistics, setStatistics] = React.useState<z.infer<typeof statisticsZodSchema> | null>(null);

	useEffect(() => {
		requestStatistics()
			.then((response) => response.json())
			.then((response) => statisticsZodSchema.parseAsync(response))
			.then((statistics) => setStatistics(statistics));
	}, []);

	return statistics;
};

export function Statistics() {
	const statistics = useStatistics();

	if (!statistics) return <div>Loading statistics...</div>;

	return (
		<div>
			{statistics.map((statistic) => (
				<StatisticsComponent
					key={statistic.id}
					name={statistic.name}
					homeValue={statistic.homeValue}
					awayValue={statistic.awayValue}
				/>
			))}
		</div>
	);
}
