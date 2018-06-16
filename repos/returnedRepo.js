var db = require('../fn/db');
var config = require('../config/config');

exports.single = id => {
	var sql = `select * from return_book where id = ${id}`;
    console.log(sql);
	return db.load(sql);
}

exports.loadAll = () => {
    var sql = `SELECT * FROM return_book`;
    return db.load(sql);
}

exports.add = n => {
    var sql = `insert into return_book(Book_Number, Book_Title, Issue_Date, Due_Date, Return_Date, Member, Number, Fine , Status) 
    values('${n.Book_Number}', '${n.Book_Title}', '${n.Issue_Date}', '${n.Due_Date}', '${n.Return_Date}', '${n.Member}','${n.Number}', '${n.Fine}', '${n.Status}')`;
    return db.save(sql);
}


exports.delete = id => {
	var sql = `delete from return_book where id = ${id}`;
	return db.save(sql);
}

exports.update = returned => {
	var sql = `update return_book set
	Book_Number = '${returned.Book_Number}', 
	Book_Title = '${returned.Book_Title}', 
	Issue_Date = '${returned.Issue_Date}',
	Due_Date = '${returned.Due_Date}', 
	Return_Date = '${returned.Return_Date}', 
	Member = '${returned.Member}', 
	Number = '${returned.Number}',
	Fine = '${returned.Fine}',
	Status = '${returned.Status}'  
	where id = '${returned.id}'`;
	console.log(sql);
	return db.save(sql);
}

exports.loadAllOffset = (offset) => {
	var sql = `select * from return_book limit ${config.RETURNED_PER_PAGE} offset ${offset}`;
	return db.load(sql);
}

exports.countReturned = () => {
	var sql = `select count(*) as total from return_book`;
	return db.load(sql);
}

exports.book_issued = (id) => {
    var sql = `SELECT book_issue.*, users.*, books.* FROM book_issue, users, books WHERE book_issue.Member = ${id} && book_issue.Member = users.id && books.id = book_issue.Book_Title`
    return db.save(sql);
}

exports.book_return = (id) => {
    var sql = `SELECT return_book.*, users.*, books.* FROM return_book, users, books WHERE return_book.Member = ${id} && return_book.Member = users.id && books.id = return_book.Book_Title`
    return db.save(sql);
}

exports.search = (stringSearch) => {
	var sql = `SELECT * FROM return_book WHERE Name LIKE '%${stringSearch}%'`
    return db.save(sql);
}