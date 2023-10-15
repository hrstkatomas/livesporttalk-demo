import { StatsGeneratorInput } from "./types";

export enum StatisticType {
	PERCENTAGE,
	COUNT,
	FLOAT,
}

export const statisticsGeneratorDefinitions: StatsGeneratorInput[] = [
	{
		id: 432,
		name: "Expected Goals (xG)",
		type: StatisticType.FLOAT,
		range: 2,
	},
	{
		id: 12,
		name: "Ball Possession",
		type: StatisticType.PERCENTAGE,
		range: 100,
	},
	{
		id: 34,
		name: "Goal Attempts",
		type: StatisticType.COUNT,
		range: 10,
	},
	{
		id: 13,
		name: "Shots on Goal",
		type: StatisticType.COUNT,
		range: 8,
	},
	{
		id: 14,
		name: "Shots off Goal",
		type: StatisticType.COUNT,
		range: 8,
	},
	{
		id: 158,
		name: "Blocked Shots",
		type: StatisticType.COUNT,
		range: 10,
	},
	{
		id: 15,
		name: "Free Kicks",
		type: StatisticType.COUNT,
		range: 20,
	},
	{
		id: 16,
		name: "Corner Kicks",
		type: StatisticType.COUNT,
		range: 10,
	},
	{
		id: 17,
		name: "Offsides",
		type: StatisticType.COUNT,
		range: 8,
	},
	{
		id: 19,
		name: "Goalkeeper Saves",
		type: StatisticType.COUNT,
		range: 5,
	},
	{
		id: 21,
		name: "Fouls",
		type: StatisticType.COUNT,
		range: 20,
	},
	{
		id: 23,
		name: "Yellow Cards",
		type: StatisticType.COUNT,
		range: 4,
	},
	{
		id: 304,
		name: "Total Passes",
		type: StatisticType.COUNT,
		range: 500,
	},
	{
		id: 342,
		name: "Completed Passes",
		type: StatisticType.COUNT,
		range: 450,
	},
	{
		id: 189,
		name: "Tackles",
		type: StatisticType.COUNT,
		range: 20,
	},
	{
		id: 372,
		name: "Attacks",
		type: StatisticType.COUNT,
		range: 130,
	},
	{
		id: 373,
		name: "Dangerous Attacks",
		type: StatisticType.COUNT,
		range: 50,
	},
];
