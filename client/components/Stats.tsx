import React, { useEffect } from "react";
import "@flashscore/web-component-library/index.css";
import "@flashscore/web-component-library/colorVariables.css";
import { statsZodSchema } from "../utils/statsZodSchema";
import { z } from "zod";
import { StatsSkeleton } from "./StatsSkeleton";
import { Statistics } from "@flashscore/web-component-library";
import { switchMap, timer } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { WEBSOCKET_URL } from "../utils/websocketUrl";
import { Refresher } from "./Refresher";

type Stats = z.infer<typeof statsZodSchema>;
interface StatsProps {
	stats: Stats;
}

function useStats() {
	const [stats, setStats] = React.useState<Stats | null>(null);

	useEffect(() => {
		const observable = webSocket(WEBSOCKET_URL).pipe(
			switchMap(() =>
				fetch("/api/stats")
					.then((response) => response.json())
					.then((data) => statsZodSchema.parseAsync(data)),
			),
		);

		const subscription = observable.subscribe(setStats);
		return () => subscription.unsubscribe();
	}, []);
	return stats;
}

export function Stats({ stats: initialData }: StatsProps) {
	const stats = useStats();

	return <StatsRenderer stats={stats || initialData} />;
}

export function StatsRenderer({ stats }: StatsProps) {
	return (
		<div>
			{stats.map((stat) => (
				<Statistics key={stat.id} {...stat} />
			))}
			<Refresher />
		</div>
	);
}
