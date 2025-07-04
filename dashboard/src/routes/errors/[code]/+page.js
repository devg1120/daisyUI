import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const status = +params.code;

    if (isNaN(status) || status < 400 || status > 599) {
        return error(500, 'Wrong code');
    } else {
        const code = /** @type {import('@sveltejs/kit').NumericRange<400,599>} */ (status);
        error(code, 'Not found');
    }
}
