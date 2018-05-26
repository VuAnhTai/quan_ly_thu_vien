//chứa những câu lệnh sql cho bảng books

var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from books';
    return db.load(sql);
}



exports.add = n => {
    var sql = `insert into books(ISBN_NO, Book_Title, Book_Type, Author_Name, Quantity, Purchase_Date, Edition, Price,Pages, Publisher) 
    values('${n.ISBN_NO}', '${n.Book_Title}', '${n.Book_Type}', '${n.Author_Name}', '${n.Quantity}', '${n.Purchase_Date}', '${n.Edition}','${n.Price}' ,'${n.Pages}','${n.Publisher}')`;
    return db.save(sql);
}


// exports.single = (id) => {
//     return new Promise((resolve, reject) => {
//         var sql = `select * from categories where CatId = ${id}`;
//         db.load(sql).then(rows => {
//             if (rows.length === 0) {
//                 resolve(null);
//             } else {
//                 resolve(rows[0]);
//             }
//         }).catch(err => {
//             reject(err);
//         });
//     });
// }

// exports.add = (c) => {
//     var sql = `insert into categories(catname) values('${c.CatName}')`;
//     return db.save(sql);
// }

// exports.delete = (id) => {
//     var sql = `delete from categories where CatId = ${id}`;
//     return db.save(sql);
// }

// exports.update = (c) => {
//     var sql = `update categories set CatName = '${c.CatName}' where CatID = ${c.CatId}`;
//     return db.save(sql);
// }
