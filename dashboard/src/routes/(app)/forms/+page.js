import { _formSchema } from './schema'
import { superValidate } from 'sveltekit-superforms/client'
import { zod } from 'sveltekit-superforms/adapters'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    const form = await superValidate({}, zod(_formSchema), { id: 'username' })
    // const secondForm = await superValidate({}, zod(_formSchema), { id: 'email' })
    return { form }
};
