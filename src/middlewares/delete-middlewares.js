const _ = require('lodash');
const url = require("url");

module.exports = (router) => {
    return (req, res, next) => {
        if (req.method === 'DELETE') {
            let resource;
            let pathname = url.parse(req.url).pathname ;
            pathname = pathname.substring(1);
            const reqItems = pathname.split('/')
            const name = reqItems[0];
            const ids = reqItems[1];
            const db = router.db;
            const opts = {
                foreignKeySuffix: 'Id',
                _isFake: false
            };

            if (opts._isFake) {
                resource = db.get(name).value();
            } else {
                ids.split(',').filter(id => id !== '' || id !== undefined || id !== null).forEach(id => {
                resource = db.get(name).removeById(id).value(); // Remove dependents documents

                const removable = db._.getRemovable(db.getState(), opts);
                removable.forEach(item => {
                    db.get(item.name).removeById(item.id).value();
                });
            })
        }
        if (resource) {
            res.locals.data = {};
        }
    }
    next();
}

}
