//chứa những câu lệnh sql cho bảng books

var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from books';
    return db.load(sql);
}

exports.single = id => {
	var sql = `select * from books where id = ${id}`;
	return db.load(sql);
}


exports.delete = (id) => {
    var sql = `delete from books where id = ${id}`;
    return db.save(sql);
}


exports.add = n => {
    var sql = `insert into books(ISBN_NO, Book_Title, Book_Type, Author_Name, Quantity, Purchase_Date, Edition, Price,Pages, Publisher) 
    values('${n.ISBN_NO}', '${n.Book_Title}', '${n.Book_Type}', '${n.Author_Name}', '${n.Quantity}', '${n.Purchase_Date}', '${n.Edition}','${n.Price}' ,'${n.Pages}','${n.Publisher}')`;
    return db.save(sql);
}

exports.update = book => {
	var sql = `update books set
	ISBN_NO = '${book.ISBN_NO}', 
	Book_Title = '${book.Book_Title}', 
    Book_Type = '${book.Book_Type}',
    Author_Name = '${book.Author_Name}',
    Quantity = '${book.Quantity}',
    Purchase_Date = '${book.Purchase_Date}',
    Edition = '${book.Edition}',
    Price = '${book.Price}',
    Pages = '${book.Pages}',
	Publisher = '${book.Publisher}' 
	where id = '${book.id}'`;
	console.log(sql);
	return db.save(sql);
}
