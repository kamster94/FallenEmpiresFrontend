/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;
const customRoutes = require('./routes.json');

server.use(jsonServer.rewriter(customRoutes));
server.use(middleware);
server.use(router);

server.listen(port);
