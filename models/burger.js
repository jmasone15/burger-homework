const orm = require("../config/orm.js");

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    create(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    delete(condition, cb) {
        orm.deleteOne('burgers', condition, (res) => cb(res));
    }
};

// Export to controller for routes
module.exports = burger;