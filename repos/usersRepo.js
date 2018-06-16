var db = require('../fn/db');
var config = require('../config/config');

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

exports.loadAllOffset = (offset) => {
	var sql = `select * from users limit ${config.USER_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.countUsers = () => {
	var sql = `select count(*) as total from users`;
	return db.load(sql);
}

exports.book_issued = (id) => {
    var sql = `SELECT book_issue.*, users.*, books.* FROM book_issue, users, books WHERE book_issue.Member = ${id} && book_issue.Member = users.id && books.id = book_issue.Book_Title`
    return db.save(sql);
}

exports.book_return = (id) => {
	var sql = `SELECT return_book.*, users.*, books.* FROM return_book, users, books 
	WHERE 
	return_book.Member = ${id} && return_book.Member = users.id && books.id = return_book.Book_Title`
    return db.save(sql);
}
exports.search = (stringSearch) => {
	var sql = `SELECT * FROM users WHERE Name LIKE '%${stringSearch}%'`
    return db.load(sql);
}

exports.delete = (id) => {
    var sql = `delete from users where id = ${id}`;
    return db.save(sql);
}