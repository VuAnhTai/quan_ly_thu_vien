//chứa những câu lệnh sql cho bảng books

var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from magazines';
    return db.load(sql);
}

// exports.single = (id) => {
//     return new Promise((resolve, reject) => {
//         var sql = `select * from magazines where ID = ${id}`;
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

exports.add = (n) => {
    var sql = `insert into magazines(Type, Name, Date_Of_Receipt, Date_Published, Pages, Price, Publisher) 
    values('${n.Type}', '${n.Name}', '${n.Date_Of_Receipt}', '${n.Date_Published}', '${n.Pages}', '${n.Price}', '${n.Publisher}')`;
    return db.save(sql);
}

// exports.delete = (id) => {
//     var sql = `delete from categories where CatId = ${id}`;
//     return db.save(sql);
// }

exports.update = (n) => {
    var sql = `update magazines set Type = '${n.Type}',
    								Name = '${n.Name}',
    								Date_Of_Receipt ='${n.Date_Of_Receipt}' ,
    								Date_Published = '${n.Date_Published}',
    								Pages = '${n.Pages}', 
    								Price = '${n.Price}',
    								Publisher = '${n.Publisher}'
    								 where id = ${n.id}`;
    								 console.log(sql);
    return db.save(sql);
}
