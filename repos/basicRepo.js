var db = require('../fn/db');

exports.count = (table) => {
	var sql = `select count(*) as total from ${table}`;
	return db.load(sql);
}

exports.loadAll = (table) => {
	var sql = `select * from ${table}`;
    return db.load(sql);
}