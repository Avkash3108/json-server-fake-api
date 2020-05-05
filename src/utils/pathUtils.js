const path = require('path');

function getConsumingPackageResourcePath(resource) {
	return path.join(process.cwd(), resource); 
}

function getPackagePath(package) {
    const paths = Array.prototype.slice.call(arguments, 1);

    return require.resolve(path.join.apply(path, [moduleName].concat(paths)));
}

module.exports = {
	getConsumingPackageResourcePath,
	getPackagePath
};

