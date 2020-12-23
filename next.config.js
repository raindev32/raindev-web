module.exports = {
    env: {
        appName: 'Learn Next JS'
    },

    // untuk setting routes saja.
    async rewrites () {
        return [
            {
                source: '/login',
                destination: '/auth/login'
            },
            {
                source: '/register',
                destination: '/auth/register'
            }
        ]
    }
}