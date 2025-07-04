import { z } from 'zod';

export const _formSchema = z.object({
    username: z.string().min(2, '最少两个字符').max(50, '最多50个字符'),
    email: z.string().email('无效邮箱地址'),
    bio: z.string().min(4).max(160).default("I own a computer."),
    urls: z
        .array(z.string().url())
        .default(["https://shadcn.com", "https://twitter.com/shadcn"]),
})

// Extract the inferred type as a JSDoc type
/** @typedef { z.infer<typeof _formSchema>} _form  */
