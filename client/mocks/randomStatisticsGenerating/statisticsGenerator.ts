import { Stat, StatsGeneratorInput } from "./types";
import { statisticsGeneratorDefinitions, StatisticType } from "./statisticsGeneratorDefinitions";

const generateRandomValue = (range: number): number => {
	// Possible improvement, use geometric distribution to generate random values
	return Math.random() * range;
};

function statisticsGenerator(inputs: StatsGeneratorInput[]): Stat[] {
	return inputs.map(({ type, range, ...commons }) => {
		switch (type) {
			case StatisticType.COUNT:
				return {
					...commons,
					homeValue: Math.floor(generateRandomValue(range)).toString(),
					awayValue: Math.floor(generateRandomValue(range)).toString(),
				};

			case StatisticType.FLOAT:
				return {
					...commons,
					homeValue: generateRandomValue(range).toFixed(2),
					awayValue: generateRandomValue(range).toFixed(2),
				};

			case StatisticType.PERCENTAGE: {
				const randomValue = Math.floor(generateRandomValue(range));

				return {
					...commons,
					homeValue: randomValue.toString(),
					awayValue: (range - randomValue).toString(),
				};
			}
		}
	});
}

export function getRandomStatistics(): Stat[] {
	return statisticsGenerator(statisticsGeneratorDefinitions);
}
