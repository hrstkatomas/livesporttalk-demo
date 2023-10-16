import React, { useEffect } from "react";
import { Statistics as StatisticsComponent } from "@flashscore/web-component-library";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { requestStatistics } from "../mocks/statisticsApi/api";
import { statisticsZodSchema } from "../utils/statisticsZodSchema";
import { z } from "zod";
import { BehaviorSubject, share, switchMap, timer } from "rxjs";
import { Refresher } from "./Refresher";

const statsSubject = new BehaviorSubject<z.infer<typeof statisticsZodSchema> | null>(null);
const observable = timer(0, 5_000).pipe(
	switchMap(() =>
		requestStatistics()
			.then((response) => response.json())
			.then((response) => statisticsZodSchema.parseAsync(response)),
	),
	share({ connector: () => statsSubject, resetOnRefCountZero: true }),
);

const useStatistics = () => {
	const [statistics, setStatistics] = React.useState<z.infer<typeof statisticsZodSchema> | null>(
		statsSubject.getValue(),
	);

	useEffect(() => {
		const subscription = observable.subscribe(setStatistics);
		return () => subscription.unsubscribe();
	}, []);

	return statistics;
};

export function Statistics() {
	const statistics = useStatistics();

	// TODO: prepare skeleton component
	if (!statistics) return <div>Loading statistics...</div>;

	return <StatisticsRenderer statistics={statistics} />;
}

export interface StatisticsProps {
	statistics: z.infer<typeof statisticsZodSchema>;
}

export function StatisticsHydrating({ statistics: initialStatistics }: StatisticsProps) {
	const statistics = useStatistics();
	return <StatisticsRenderer statistics={statistics || initialStatistics} />;
}

export function StatisticsRenderer({ statistics }: StatisticsProps) {
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
			<Refresher />
		</div>
	);
}
