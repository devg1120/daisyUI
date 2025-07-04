import { z } from 'zod';

export const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' }
] as const;

type Language = (typeof languages)[number]["value"]

export const accountSchema = z.object({
    name: z
        .string({ required_error: 'Required.' })
        .min(2, 'Name must be at least 2 characters.')
        .max(30, 'Name must not be longer than 30 characters.'),
    language: z.enum(languages.map(lang => lang.value) as [Language, ...Language[]]),
    dob: z
        .string()
        .datetime()
        .optional()
        .refine((date) => (date === undefined ? false : true), 'Please select a valid date.')
});

export type AccountSchema = typeof accountSchema
