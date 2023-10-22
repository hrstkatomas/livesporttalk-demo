import { Stat, StatsGeneratorInput } from "./types";
import { statsGeneratorDefinitions, StatType } from "./statsGeneratorDefinitions";

const generateRandomValue = (range: number): number => {
	// Possible improvement, use geometric distribution to generate random values
	return Math.random() * range;
};

function statsGenerator(inputs: StatsGeneratorInput[]): Stat[] {
	return inputs.map(({ type, range, ...commons }) => {
		switch (type) {
			case StatType.COUNT:
				return {
					...commons,
					homeValue: Math.floor(generateRandomValue(range)).toString(),
					awayValue: Math.floor(generateRandomValue(range)).toString(),
				};

			case StatType.FLOAT:
				return {
					...commons,
					homeValue: generateRandomValue(range).toFixed(2),
					awayValue: generateRandomValue(range).toFixed(2),
				};

			case StatType.PERCENTAGE: {
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

export function getRandomStats(): Stat[] {
	return statsGenerator(statsGeneratorDefinitions);
}
