const prefix = ''

export const appConfig = {
    DEV_MODE: true,
    config: {
        vat: 7,
    },
    api: {
        users: `api/users`
    },
    dev: {
        api: {
            url: 'http://localhost',
            port: 3000,
            // prefix,
        }
    },
    prod: {
        api: {
            url: 'https://ice-api.powerkeenwealth.com',
            port: 443,
            // prefix,
        }
    }
};