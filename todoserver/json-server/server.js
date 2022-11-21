const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + '/data.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + './build'),
});

const port = process.env.PORT || 4000;

server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(port, () => {
  console.log(port, 'JSON Server is running');
});
