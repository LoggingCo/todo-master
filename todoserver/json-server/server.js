const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('data.json');

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.db = router.db;

const rules = auth.rewriter({
  users: 660,
  todo: 660,
});

server.use(rules);
server.use(auth);
server.use(router);

server.listen(9000, () => {
  console.log('JSON Server is running');
});
