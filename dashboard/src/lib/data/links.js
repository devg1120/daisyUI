/**
 * @typedef {Object} Icon 
 * @prop {string} inactive
 * @prop {string} active
 */
/**
 * @typedef {Object} Link
 * @prop {string} name
 * @prop {string} [path]
 * @prop {Icon} icon
 * @prop {Array<Link>} [nested_links]
 */

/**
 * @type {Array<Link>}
 */
export const links = [
    {
        name: 'Dashboard',
        path: '/',
        icon: {
            inactive: 'ph:house',
            active: 'ph:house-fill',
        }
    },
    {
        name: 'Forms',
        path: '/forms',
        icon: {
            inactive: 'fluent:form-48-regular',
            active: 'fluent:form-48-filled'
        },
    },
    {
        name: 'Cards',
        path: '/cards',
        icon: {
            inactive: 'mdi:cards-outline',
            active: 'mdi:cards'
        }
    },
    {
        name: 'Tables',
        path: '/tables',
        icon: {
            inactive: 'mdi:file-table-box-outline',
            active: 'mdi:file-table-box'
        }
    },
    {
        name: 'Charts',
        path: '/charts',
        icon: {
            inactive: 'mdi:chart-pie-outline',
            active: 'mdi:chart-pie'
        }
    },
    {
        name: 'Pages',
        icon: {
            inactive: 'mdi:papers-outline',
            active: 'mdi:papers'
        },
        nested_links: [
            {
                name: '404',
                path: '/errors/404',
                icon: {
                    inactive: 'solar:login-linear',
                    active: 'solar:login-bold'
                }
            },
            {
                name: '500',
                path: '/errors/500',
                icon: {
                    inactive: 'solar:login-linear',
                    active: 'solar:login-bold'
                }
            },
            {
                name: 'Maintenance',
                path: '/errors/400',
                icon: {
                    inactive: 'solar:login-linear',
                    active: 'solar:login-bold'
                }
            },

        ]
    },
    {
        name: 'Authencation',
        icon: {
            inactive: 'mdi:lock-outline',
            active: 'mdi:lock'
        },
        nested_links: [
            {
                name: 'Login in',
                path: '/login-in',
                icon: {
                    inactive: 'solar:login-linear',
                    active: 'solar:login-bold'
                }
            },
            {
                name: 'Sign up',
                path: '/sign-up',
                icon: {
                    inactive: 'bx:user',
                    active: 'bxs:user'
                }
            },
            {
                name: 'Reset password',
                path: '/reset-password',
                icon: {
                    inactive: 'bx:user',
                    active: 'bxs:user'
                }
            },
            {
                name: 'Forgot password',
                path: '/forgot-password',
                icon: {
                    inactive: 'bx:user',
                    active: 'bxs:user'
                }
            }
        ]
    }
]
