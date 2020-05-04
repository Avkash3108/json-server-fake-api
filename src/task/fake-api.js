function run(params) {
    const jsonServer = require('json-server');
    const server = jsonServer.create();
    const router = jsonServer.router('../db.json');
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);
    server.listen(params.port, () => {
        console.log('JSON Server is running')
    });
}

exports.command = 'start';
exports.describe = 'Run fake json API and run json server.'
exports.builder = {
	port: {
		default:  3000,
		type: 'number'
	}
};
exports.handler = run