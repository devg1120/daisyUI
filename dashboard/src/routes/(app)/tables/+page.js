import { invoices } from '$lib/data/invoice';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        invoices: invoices
    }
}
