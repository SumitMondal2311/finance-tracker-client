import { z } from 'zod';

export const loginValidator = z.object({
    email: z
        .string()
        .trim()
        .nonempty({ message: 'This field is required' })
        .email({ message: 'Invalid email' })
        .transform((str) => str.toLowerCase()),
    password: z
        .string()
        .trim()
        .nonempty({ message: 'This field is required' })
        .min(8, { message: 'Must have at least 8 letters' })
        .regex(/[a-z]/, { message: 'Must have at least 1 lowercase letter' })
        .regex(/[A-Z]/, { message: 'Must have at least 1 uppercase letter' })
        .regex(/[0-9]/, { message: 'Must have at least 1 number' })
        .regex(/[^A-Za-z0-9]/, { message: 'Must have at least 1 special character' }),
});
