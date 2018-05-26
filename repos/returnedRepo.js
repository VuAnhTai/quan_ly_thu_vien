var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from return_book';
    return db.load(sql);
}

exports.add = (n) => {
    var sql = `insert into return_book(Book_Number, Book_Title, Issue_Date, Due_Date, Return_Date, Member, Number, Fine,Status) 
    values('${n.Book_Number}', '${n.Book_Title}', '${n.Issue_Date}', '${n.Due_Date}', '${n.Return_Date}', '${n.Member}','${n.Number}', '${n.Fine}', '${n.Status}')`;
    return db.save(sql);
}