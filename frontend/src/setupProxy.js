const { createProxyMiddleware } = require('http-proxy-middleware');

const isLocalTest = true;

module.exports = function(app) {
  app.use(
    [ '/VoteService/vote/*', '/VoteService/vote' ],
    createProxyMiddleware({
      target: isLocalTest
        ? 'http://127.0.0.1:8081'
        : 'http://20.198.108.29.sslip.io',
      changeOrigin: true,
    })
  );

};
