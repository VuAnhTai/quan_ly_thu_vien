var db = require('../fn/db');

exports.loadAll = () => {
	var sql = 'select * from users';
	return db.load(sql);
}