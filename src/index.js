const pathUtils = require('./utils/pathUtils')
const jsonServer = require('json-server');
const server = jsonServer.create();
const dbPath = pathUtils.getPackagePath('@avkash3108/json-server-fake-api', 'src/db/db.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.argv[2], () => {
  console.log(`JSON Server is running port ${process.argv[2]}`);
});