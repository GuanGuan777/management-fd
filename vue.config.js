const path = require('path');
const name = "资源管理库";
const port = 8080;

module.exports = {
    devServer: {
        host: 'localhost',
        port: port,
        https: false,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            '/api/v1': {
                target: 'http://localhost:8085/api/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/v1': ''
                }
            }
        }
    }
}