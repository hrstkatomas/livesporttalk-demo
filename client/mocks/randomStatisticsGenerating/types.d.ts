import { StatisticType } from "./statisticsGeneratorDefinitions";

export interface Stat {
	id: number;
	name: string;
	homeValue: string;
	awayValue: string;
}

export interface StatsGeneratorInput {
	id: number;
	name: string;
	type: StatisticType;
	range: number;
}
