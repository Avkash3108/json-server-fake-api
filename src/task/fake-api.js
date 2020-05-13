const pathUtils = require('../utils/pathUtils');
const shelljs = require('shelljs');

function run(params) {
    const dbExporter = pathUtils.getPackagePath('@avkash3108/json-server-fake-api', 'src/export-db.js');
    const runServer = pathUtils.getPackagePath('@avkash3108/json-server-fake-api', 'src/index.js');
    const command = `node ${dbExporter} ${params.schema} & node ${runServer} ${params.port}`;
    const result = shelljs.exec(command);
    const success = 0;

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
    },
    schema: {
        default: 'index',
        type: 'string'
    }
};
exports.handler = run