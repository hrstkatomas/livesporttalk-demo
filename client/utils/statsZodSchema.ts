import { z } from "zod";

const statsRowSchema = z.object({
	id: z.number(),
	name: z.string(),
	homeValue: z.string(),
	awayValue: z.string(),
});

export const statsZodSchema = z.array(statsRowSchema);
