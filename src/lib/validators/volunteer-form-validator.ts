import { z } from "zod";

export const VolunteerFormValidator = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^0\d{10}$/),
  text: z.string(),
});

export type TVolunteerFormValidator = z.infer<typeof VolunteerFormValidator>;
