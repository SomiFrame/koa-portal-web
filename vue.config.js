module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
