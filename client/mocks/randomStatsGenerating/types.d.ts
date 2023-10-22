import { StatType } from "./statsGeneratorDefinitions";

export interface Stat {
	id: number;
	name: string;
	homeValue: string;
	awayValue: string;
}

export interface StatsGeneratorInput {
	id: number;
	name: string;
	type: StatType;
	range: number;
}
