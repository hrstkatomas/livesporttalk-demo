import React, { useEffect } from "react";
import { Statistics } from "@flashscore/web-component-library";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { statsZodSchema } from "../utils/statsZodSchema";
import { z } from "zod";
import { BehaviorSubject, interval, share, switchMap } from "rxjs";
import { Refresher } from "./Refresher";
import { StatsSkeleton } from "./StatsSkeleton";

const statsSubject = new BehaviorSubject<z.infer<typeof statsZodSchema> | null>(null);
const observable = interval(5_000).pipe(
	switchMap(() =>
		fetch("/api/stats")
			.then((response) => response.json())
			.then((response) => statsZodSchema.parseAsync(response)),
	),
	share({ connector: () => statsSubject, resetOnRefCountZero: true }),
);

const useStats = () => {
	const [stats, setStats] = React.useState<z.infer<typeof statsZodSchema> | null>(statsSubject.getValue());

	useEffect(() => {
		const subscription = observable.subscribe(setStats);
		return () => subscription.unsubscribe();
	}, []);

	return stats;
};

export function Stats() {
	const stats = useStats();

	if (!stats) return <StatsSkeleton />;

	return <StatsRenderer stats={stats} />;
}

export interface StatsProps {
	stats: z.infer<typeof statsZodSchema>;
}

export function StatsHydrating({ stats: initialStats }: StatsProps) {
	const stats = useStats();
	return <StatsRenderer stats={stats || initialStats} />;
}

export function StatsRenderer({ stats }: StatsProps) {
	return (
		<div>
			{stats.map((stat) => (
				<Statistics key={stat.id} name={stat.name} homeValue={stat.homeValue} awayValue={stat.awayValue} />
			))}
			<Refresher />
		</div>
	);
}
