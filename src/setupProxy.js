const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/graph',
    createProxyMiddleware({
      target: process.env.BACKEND_API_ENDPOINT || 'https://test5.qstand.art/',
      changeOrigin: true,
    })
  )
  app.use(
    '/media',
    createProxyMiddleware({
      target: process.env.BACKEND_API_ENDPOINT || 'https://test5.qstand.art/',
      changeOrigin: true,
    })
  )
}
