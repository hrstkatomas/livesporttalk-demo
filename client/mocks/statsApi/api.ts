import { getRandomStats } from "../randomStatsGenerating/statsGenerator";

export function requestStats(): Promise<Response> {
	console.log("making a request");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(new Response(JSON.stringify(getRandomStats())));
		}, 1_000);
	});
}
