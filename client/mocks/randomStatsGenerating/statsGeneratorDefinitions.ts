import { StatsGeneratorInput } from "./types";

export enum StatType {
	PERCENTAGE,
	COUNT,
	FLOAT,
}

export const statsGeneratorDefinitions: StatsGeneratorInput[] = [
	{
		id: 432,
		name: "Expected Goals (xG)",
		type: StatType.FLOAT,
		range: 2,
	},
	{
		id: 12,
		name: "Ball Possession",
		type: StatType.PERCENTAGE,
		range: 100,
	},
	{
		id: 34,
		name: "Goal Attempts",
		type: StatType.COUNT,
		range: 10,
	},
	{
		id: 13,
		name: "Shots on Goal",
		type: StatType.COUNT,
		range: 8,
	},
	{
		id: 14,
		name: "Shots off Goal",
		type: StatType.COUNT,
		range: 8,
	},
	{
		id: 158,
		name: "Blocked Shots",
		type: StatType.COUNT,
		range: 10,
	},
	{
		id: 15,
		name: "Free Kicks",
		type: StatType.COUNT,
		range: 20,
	},
	{
		id: 16,
		name: "Corner Kicks",
		type: StatType.COUNT,
		range: 10,
	},
	{
		id: 17,
		name: "Offsides",
		type: StatType.COUNT,
		range: 8,
	},
	{
		id: 19,
		name: "Goalkeeper Saves",
		type: StatType.COUNT,
		range: 5,
	},
	{
		id: 21,
		name: "Fouls",
		type: StatType.COUNT,
		range: 20,
	},
	{
		id: 23,
		name: "Yellow Cards",
		type: StatType.COUNT,
		range: 4,
	},
	{
		id: 304,
		name: "Total Passes",
		type: StatType.COUNT,
		range: 500,
	},
	{
		id: 342,
		name: "Completed Passes",
		type: StatType.COUNT,
		range: 450,
	},
	{
		id: 189,
		name: "Tackles",
		type: StatType.COUNT,
		range: 20,
	},
	{
		id: 372,
		name: "Attacks",
		type: StatType.COUNT,
		range: 130,
	},
	{
		id: 373,
		name: "Dangerous Attacks",
		type: StatType.COUNT,
		range: 50,
	},
];
