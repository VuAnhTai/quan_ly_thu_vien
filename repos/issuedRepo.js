var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'SELECT * FROM users, book_issue, books WHERE users.id = book_issue.Member and book_issue.id=books.id';
    return db.load(sql);
}