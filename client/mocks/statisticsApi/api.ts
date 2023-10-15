import { getRandomStatistics } from "../randomStatisticsGenerating/statisticsGenerator";

export function requestStatistics(): Promise<Response> {
	console.log("making a request");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(new Response(JSON.stringify(getRandomStatistics())));
		}, 1_000);
	});
}
