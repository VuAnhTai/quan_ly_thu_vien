var db = require('../fn/db');

exports.loadAll = () => {
	var sql = 'select * from users';
	return db.load(sql);
}

exports.single = id => {
	var sql = `select * from users where id = ${id}`;
	return db.load(sql);
}

exports.add = user => {
	var sql = `insert into users(id, Membership_Number, Name, Contact, ID_Number) 
	values('', '${user.Membership_Number}', '${user.Name}', '${user.Contact}', '${user.ID_Number}')`;
	return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from users where id = ${id}`;
	return db.save(sql);
}

exports.update = user => {
	var sql = `update users set
	Membership_Number = '${user.Membership_Number}', 
	Name = '${user.Name}', 
	Contact = '${user.Contact}',
	ID_Number = '${user.ID_Number}' 
	where id = '${user.id}'`;
	console.log(sql);
	return db.save(sql);
}