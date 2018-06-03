var db = require('../fn/db');

exports.single = id => {
	var sql = `select * from return_book where id = ${id}`;
	return db.load(sql);
}

exports.loadAll = () => {
    var sql = 'SELECT * FROM users, return_book, books WHERE users.id = return_book.Member and return_book.id=books.id';
    return db.load(sql);
}

exports.add = (n) => {
    var sql = `insert into return_book(Book_Number, Book_Title, Issue_Date, Due_Date, Return_Date, Member, Number, Fine,Status) 
    values('${n.Book_Number}', '${n.Book_Title}', '${n.Issue_Date}', '${n.Due_Date}', '${n.Return_Date}', '${n.Member}','${n.Number}', '${n.Fine}', '${n.Status}')`;
    return db.save(sql);
}

exports.delete = id => {
	var sql = `delete from return_book where id = ${id}`;
	return db.save(sql);
}

