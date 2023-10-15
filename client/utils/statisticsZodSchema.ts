import { z } from "zod";

const statisticsRowSchema = z.object({
	id: z.number(),
	name: z.string(),
	homeValue: z.string(),
	awayValue: z.string(),
});

export const statisticsZodSchema = z.array(statisticsRowSchema);
