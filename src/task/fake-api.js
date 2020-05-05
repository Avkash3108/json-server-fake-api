const pathUtils = require('../utils/pathUtils');
const shelljs = require('shelljs');

function run(params) {
    const dbExporter = pathUtils('@avkash3108/json-server-fake-api', 'src/export-db.js');
    const runServer = pathUtils('@avkash3108/json-server-fake-api', 'src/index.js');
    const command = `node ${dbExporter} & node ${runServer}`;
    const result = shelljs.exec(command);
    cons success = 0;

    if (result.code !== undefined && result.code !== success) {
        shelljs.exit(result.code);
    }
    return result;
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