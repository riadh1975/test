const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/api2'],
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '/api', // rewrite path
      },
    })
  );
};